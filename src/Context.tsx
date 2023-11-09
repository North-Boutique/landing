import { createContext, useCallback, useReducer } from 'react';

// Create Context
// Type Props
type MenuItemProps = {
  id: number;
  name: string;
  href: string;
};
type TokyoContextProps = {
  nav: string;
  animation: string;
  modal: boolean;
  serviceModal: any;
  newsModal: any;
  portfolioDetailsModal: any;
  menus: MenuItemProps[];
  navChange?: any;
  animationChnage?: any;
  modalToggle?: any;
  setServiceModal?: any;
  setNewsModal?: any;
  setPortfolioDetailsModal?: any;
};

// Type
const actionTypes = {
  NAV: 'NAV',
  ANIMATION: 'ANIMATION',
  MODAL: 'MODAL',
  SERVICEMODAL: 'SERVICEMODAL',
  NEWSMODAL: 'NEWSMODAL',
  PORTFOLIODETAILSMODAL: 'PORTFOLIODETAILSMODAL',
};
const {
  NAV,
  ANIMATION,
  MODAL,
  SERVICEMODAL,
  NEWSMODAL,
  PORTFOLIODETAILSMODAL,
} = actionTypes;

// Initial Value
const initialState: TokyoContextProps = {
  nav: 'home',
  animation: 'fadeInLeft',
  modal: false,
  serviceModal: null,
  newsModal: null,
  portfolioDetailsModal: null,
  menus: [
    { id: 1, name: 'Home', href: 'home' },
    { id: 2, name: 'about', href: 'about' },
    // { id: 3, name: 'service', href: 'service' },
    // { id: 4, name: 'portfolio', href: 'portfolio' },
    { id: 3, name: 'contact', href: 'contact' },
  ],
};

// Reducer
const reducer = (
  state: TokyoContextProps,
  action: { type: keyof typeof actionTypes; payload: any }
) => {
  const { type, payload } = action;

  switch (type) {
    case NAV:
      return {
        ...state,
        nav: payload,
      };
    case ANIMATION:
      return {
        ...state,
        animation: payload,
      };
    case MODAL:
      return {
        ...state,
        modal: payload,
      };
    case SERVICEMODAL:
      return {
        ...state,
        serviceModal: payload,
      };
    case NEWSMODAL:
      return {
        ...state,
        newsModal: payload,
      };
    case PORTFOLIODETAILSMODAL:
      return {
        ...state,
        portfolioDetailsModal: payload,
      };
    default:
      return state;
  }
};

type TokyoStateProps = {
  children: React.ReactNode;
};

const TokyoContext = createContext<TokyoContextProps>(initialState);

// Watson State
const TokyoState = ({ children }: TokyoStateProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const navChange = useCallback((value: string) => {
    dispatch({
      type: 'NAV',
      payload: value,
    });
  }, []);

  const animationChnage = useCallback((value: string) => {
    dispatch({
      type: 'ANIMATION',
      payload: value,
    });
  }, []);

  const modalToggle = useCallback((value: boolean) => {
    dispatch({
      type: 'MODAL',
      payload: value,
    });
  }, []);

  const setServiceModal = useCallback((value: any) => {
    dispatch({
      type: 'SERVICEMODAL',
      payload: value,
    });
  }, []);
  const setNewsModal = useCallback((value: any) => {
    dispatch({
      type: 'NEWSMODAL',
      payload: value,
    });
  }, []);
  const setPortfolioDetailsModal = useCallback((value: any) => {
    dispatch({
      type: 'PORTFOLIODETAILSMODAL',
      payload: value,
    });
  }, []);

  const {
    nav,
    animation,
    modal,
    serviceModal,
    newsModal,
    portfolioDetailsModal,
    menus,
  } = state;

  return (
    <TokyoContext.Provider
      value={{
        menus,
        nav,
        navChange,
        animation,
        animationChnage,
        modal,
        modalToggle,
        serviceModal,
        setServiceModal,
        newsModal,
        setNewsModal,
        portfolioDetailsModal,
        setPortfolioDetailsModal,
      }}>
      {children}
    </TokyoContext.Provider>
  );
};

export default TokyoState;
export { TokyoContext };
