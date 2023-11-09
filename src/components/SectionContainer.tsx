import { useContext } from 'react';
import { TokyoContext } from '../Context';

type SectionContainerProps = {
  name: string;
  children: React.ReactNode;
};

const SectionContainer = ({ name, children }: SectionContainerProps) => {
  const { nav, animation } = useContext(TokyoContext);

  return (
    <div
      id={name}
      className={`tokyo_tm_section ${
        name === nav ? `animated active ${animation}` : ''
      }`}>
      {children}
    </div>
  );
};

export default SectionContainer;
