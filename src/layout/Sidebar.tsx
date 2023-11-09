import { useContext } from 'react';
import { TokyoContext } from '../Context';
import Link from 'next/link';

const Sidebar = () => {
  // @ts-expect-error TS(2339): Property 'navChange' does not exist on type 'unkno... Remove this comment to see the full error message
  const { navChange, nav, menus } = useContext(TokyoContext);
  return (
    <div className="leftpart w-[450px] h-[100vh] fixed flex items-center z-[12] px-[100px] py-[0px] bg-white">
      <div className="leftpart_inner w-full h-auto">
        <div className="logo" data-type="image">
          {' '}
          {/* You can use image or text as logo. data-type values are: "image" and "text" */}
          <Link href="#">
            <img
              className="max-w-[150px]"
              src="/assets/img/northboutiquelogo.png"
              alt="image"
            />
            <h3 className="font-poppins font-black text-[31px] tracking-[5px]">
              North Boutique
            </h3>
          </Link>
        </div>
        <div className="menu px-[0px] py-[50px] w-full float-left">
          <ul className="transition_link m-0 list-none">
            {menus.map((menu: any) => (
              <li
                className={`m-0 w-full float-left ${
                  menu.href == nav ? 'active' : ''
                }`}
                key={menu.id}>
                <Link
                  className="text-[#767676] capitalize inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                  href={`#${menu.href}`}
                  onClick={() => navChange(menu.href)}>
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="copyright w-full float-left">
          <p className="text-[15px] text-[#999] font-montserrat leading-[25px]">
            © {new Date().getFullYear()} North Boutique
            <br />
            Created by{' '}
            <Link
              href={'#'}
              className="text-[#787878] font-medium transition-all duration-300 hover:text-black"
              target="_blank">
              Anton Lachmanicu
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
