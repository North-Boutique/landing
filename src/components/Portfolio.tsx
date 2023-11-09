import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import Isotope from 'isotope-layout';
import Image from 'next/image';
import Link from 'next/link';
import { TokyoContext } from '../Context';
import { tokyo } from '../utils';
import SectionContainer from './SectionContainer';
import SectionTitle from './SectionTitle';

const detailData = [
  {
    id: 1,
    thumbnail: '/assets/img/portfolio/7.jpg',
    title: 'Selena Gomez',
    text: [
      'We live in a world where we need to move quickly and iterate on our ideas as flexibly as possible. Building mockups strikes the ideal balance between true-life representation of the end product and ease of modification.',
      "Mockups are useful both for the creative phase of the project - for instance when you're trying to figure out your user flows or the proper visual hierarchy - and the production phase when they will represent the target product. Making mockups a part of your creative and development process allows you to quickly and easily ideate.",
    ],
    client: 'Alvaro Morata',
    date: 'October 22, 2022',
    category: 'Detail',
    share: [
      {
        id: 1,
        iconName: 'icon-facebook-squared',
        link: 'https://www.facebook.com/',
      },
      {
        id: 2,
        iconName: 'icon-twitter-squared',
        link: 'https://twitter.com/',
      },
      {
        id: 3,
        iconName: 'icon-behance-squared',
        link: 'https://www.behance.net/',
      },
      {
        id: 4,
        iconName: 'icon-linkedin-squared',
        link: 'https://www.linkedin.com/',
      },
    ],
    bigImage: '/assets/img/portfolio/1.jpg',
    images: ['/assets/img/portfolio/2.jpg', '/assets/img/portfolio/3.jpg'],
  },
  {
    id: 2,
    thumbnail: '/assets/img/portfolio/8.jpg',
    title: 'Ave Simone',
    text: [
      'We live in a world where we need to move quickly and iterate on our ideas as flexibly as possible. Building mockups strikes the ideal balance between true-life representation of the end product and ease of modification.',
      "Mockups are useful both for the creative phase of the project - for instance when you're trying to figure out your user flows or the proper visual hierarchy - and the production phase when they will represent the target product. Making mockups a part of your creative and development process allows you to quickly and easily ideate.",
    ],
    client: 'Alvaro Morata',
    date: 'October 22, 2022',
    category: 'Detail',
    share: [
      {
        id: 1,
        iconName: 'icon-facebook-squared',
        link: 'https://www.facebook.com/',
      },
      {
        id: 2,
        iconName: 'icon-twitter-squared',
        link: 'https://twitter.com/',
      },
      {
        id: 3,
        iconName: 'icon-behance-squared',
        link: 'https://www.behance.net/',
      },
      {
        id: 4,
        iconName: 'icon-linkedin-squared',
        link: 'https://www.linkedin.com/',
      },
    ],
    bigImage: '/assets/img/portfolio/1.jpg',
    images: ['/assets/img/portfolio/2.jpg', '/assets/img/portfolio/3.jpg'],
  },
];

const Portfolio = () => {
  const isotope = useRef<Isotope>();
  const [filterKey, setFilterKey] = useState('*');

  useEffect(() => {
    const data = document.querySelector('.item__');

    if (data) {
      setTimeout(() => {
        isotope.current = new Isotope('.gallery_zoom', {
          itemSelector: '.item__',
        });
      }, 3000);
    }
  }, []);
  useEffect(() => {
    if (isotope.current) {
      if (filterKey === '*') {
        isotope.current.arrange({ filter: `*` });
      } else {
        isotope.current.arrange({ filter: `.${filterKey}` });
      }
    }
  }, [filterKey]);

  const handleFilterKeyChange = useCallback(
    (key: string) => () => {
      setFilterKey(key);
    },
    []
  );

  useEffect(() => {
    tokyo.portfolioHover();
    tokyo.dataImage();
  });

  const { setPortfolioDetailsModal, modalToggle } = useContext(TokyoContext);

  return (
    <SectionContainer name={'portfolio'}>
      <div className={'container'}>
        <div
          className={
            'tokyo_tm_portfolio w-full h-auto clear-both float-left px-0 pt-[100px] pb-[40px]'
          }>
          <div
            className={
              'tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]'
            }>
            <div
              className={
                'title_flex w-full h-auto clear-both flex justify-between items-end'
              }>
              <SectionTitle
                pageName={'Portfolio'}
                title={'Creative Portfolio'}
              />
              <div className={'portfolio_filter'}>
                <ul className={'list-none'}>
                  <li className={'mr-[25px] inline-block'}>
                    <Link
                      href={'#'}
                      className={
                        'current text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black'
                      }
                      onClick={handleFilterKeyChange('*')}>
                      {'All'}
                    </Link>
                  </li>
                  <li className={'mr-[25px] inline-block'}>
                    <Link
                      className={
                        'text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black'
                      }
                      href={'#'}
                      onClick={handleFilterKeyChange('vimeo')}>
                      {'Vimeo'}
                    </Link>
                  </li>
                  <li className={'mr-[25px] inline-block'}>
                    <Link
                      className={
                        'text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black'
                      }
                      href={'#'}
                      onClick={handleFilterKeyChange('youtube')}>
                      {'Youtube'}
                    </Link>
                  </li>
                  <li className={'mr-[25px] inline-block'}>
                    <Link
                      className={
                        'text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black'
                      }
                      href={'#'}
                      onClick={handleFilterKeyChange('soundcloud')}>
                      {'Soundcloud'}
                    </Link>
                  </li>
                  <li className={'mr-[25px] inline-block'}>
                    <Link
                      className={
                        'text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black'
                      }
                      href={'#'}
                      onClick={handleFilterKeyChange('image')}>
                      {'Image'}
                    </Link>
                  </li>
                  <li className={'inline-block'}>
                    <Link
                      className={
                        'text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black'
                      }
                      href={'#'}
                      onClick={handleFilterKeyChange('detail')}>
                      {'Detail'}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={'list_wrapper w-full h-auto clear-both float-left'}>
            <ul className={'portfolio_list gallery_zoom ml-[-40px] list-none'}>
              <li
                className={'vimeo mb-[40px] float-left w-1/3 pl-[40px] item__'}>
                <div
                  className={
                    'inner w-full h-auto clear-both float-left overflow-hidden relative'
                  }>
                  <div
                    className={'entry tokyo_tm_portfolio_animation_wrap'}
                    data-title={'Teresa Butler'}
                    data-category={'Vimeo'}>
                    <Link
                      className={'popup-vimeo'}
                      href={'https://vimeo.com/337293658'}>
                      <Image
                        className={'opacity-0 min-w-full'}
                        src={'/assets/img/thumbs/1-1.jpg'}
                        alt={'image'}
                        width={40}
                        height={40}
                      />
                      <div
                        className={
                          'abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300'
                        }
                        data-img-url={'/assets/img/portfolio/5.jpg'}
                      />
                    </Link>
                  </div>
                </div>
              </li>
              <li
                className={
                  'youtube mb-[40px] float-left w-1/3 pl-[40px] item__'
                }>
                <div
                  className={
                    'inner w-full h-auto clear-both float-left overflow-hidden relative'
                  }>
                  <div
                    className={'entry tokyo_tm_portfolio_animation_wrap'}
                    data-title={'Ashley Flores'}
                    data-category={'Youtube'}>
                    <Link
                      className={'popup-youtube'}
                      href={'https://www.youtube.com/watch?v=7e90gBu4pas'}>
                      <Image
                        className={'opacity-0 min-w-full'}
                        src={'/assets/img/thumbs/1-1.jpg'}
                        alt={'image'}
                        width={40}
                        height={40}
                      />
                      <div
                        className={
                          'abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300'
                        }
                        data-img-url={'/assets/img/portfolio/6.jpg'}
                      />
                    </Link>
                  </div>
                </div>
              </li>
              <li
                className={
                  'soundcloud mb-[40px] float-left w-1/3 pl-[40px] item__'
                }>
                <div
                  className={
                    'inner w-full h-auto clear-both float-left overflow-hidden relative'
                  }>
                  <div
                    className={'entry tokyo_tm_portfolio_animation_wrap'}
                    data-title={'Derek Smith'}
                    data-category={'Soundcloud'}>
                    <Link
                      className={'soundcloude_link mfp-iframe audio'}
                      href={
                        'https://w.soundcloud.com/player/?visual=true&url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F159967086&show_artwork=true&maxwidth=1020&maxheight=1000&auto_play=1'
                      }>
                      <Image
                        className={'opacity-0 min-w-full'}
                        src={'/assets/img/thumbs/1-1.jpg'}
                        alt={'image'}
                        width={40}
                        height={40}
                      />
                      <div
                        className={
                          'abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300'
                        }
                        data-img-url={'/assets/img/portfolio/4.jpg'}
                      />
                    </Link>
                  </div>
                </div>
              </li>
              <li
                className={'image mb-[40px] float-left w-1/3 pl-[40px] item__'}>
                <div
                  className={
                    'inner w-full h-auto clear-both float-left overflow-hidden relative'
                  }>
                  <div
                    className={'entry tokyo_tm_portfolio_animation_wrap'}
                    data-title={'Gloria Jenkins'}
                    data-category={'Image'}>
                    <Link
                      className={'zoom'}
                      href={'/assets/img/portfolio/3.jpg'}>
                      <Image
                        className={'opacity-0 min-w-full'}
                        src={'/assets/img/thumbs/1-1.jpg'}
                        alt={'image'}
                        width={40}
                        height={40}
                      />
                      <div
                        className={
                          'abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300'
                        }
                        data-img-url={'/assets/img/portfolio/3.jpg'}
                      />
                    </Link>
                  </div>
                </div>
              </li>
              <li
                className={
                  'detail mb-[40px] float-left w-1/3 pl-[40px] item__'
                }>
                <div
                  className={
                    'inner w-full h-auto clear-both float-left overflow-hidden relative'
                  }>
                  <div
                    className={'entry tokyo_tm_portfolio_animation_wrap'}
                    data-title={'Selena Gomez'}
                    data-category={'Detail'}>
                    <Link
                      className={'popup_info'}
                      href={'#'}
                      onClick={() => {
                        setPortfolioDetailsModal(detailData[0]);
                        modalToggle(true);
                      }}>
                      <Image
                        className={'opacity-0 min-w-full'}
                        src={'/assets/img/thumbs/1-1.jpg'}
                        alt={'image'}
                        width={40}
                        height={40}
                      />
                      <div
                        className={
                          'abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300'
                        }
                        data-img-url={'/assets/img/portfolio/7.jpg'}
                      />
                    </Link>
                  </div>
                </div>
              </li>
              <li
                className={
                  'detail mb-[40px] float-left w-1/3 pl-[40px] item__'
                }>
                <div
                  className={
                    'inner w-full h-auto clear-both float-left overflow-hidden relative'
                  }>
                  <div
                    className={'entry tokyo_tm_portfolio_animation_wrap'}
                    data-title={'Ave Simone'}
                    data-category={'Detail'}>
                    <Link
                      className={'popup_info'}
                      href={'#'}
                      onClick={() => {
                        setPortfolioDetailsModal(detailData[1]);
                        modalToggle(true);
                      }}>
                      <Image
                        className={'opacity-0 min-w-full'}
                        src={'/assets/img/thumbs/1-1.jpg'}
                        alt={'image'}
                        width={40}
                        height={40}
                      />
                      <div
                        className={
                          'abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300'
                        }
                        data-img-url={'/assets/img/portfolio/8.jpg'}
                      />
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export { Portfolio };
