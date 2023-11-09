import { useContext } from 'react';
import { TokyoContext } from '@/src/Context';
import useClickOutside from '@/src/useClickOutside';

type ModalContainerProps = {
  children: React.ReactNode;
  nullValue: (value: null | string) => void;
};

const ModalContainer = ({ children, nullValue }: ModalContainerProps) => {
  // @ts-expect-error TS(2339): Property 'modalToggle' does not exist on type 'unk... Remove this comment to see the full error message
  const { modalToggle } = useContext(TokyoContext);
  const domNode = useClickOutside(() => {
    modalToggle(false);
    nullValue(null);
  });

  return (
    <div className={'tokyo_tm_modalbox opened'}>
      <div className={'box_inner'} ref={domNode}>
        <div className={'close'}>
          <a
            href={'#'}
            onClick={() => {
              modalToggle(false);
              nullValue(null);
            }}>
            <i className={'icon-cancel'} />
          </a>
        </div>
        <div className={'description_wrap'}>{children}</div>
      </div>
    </div>
  );
};

export default ModalContainer;
