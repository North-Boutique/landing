import { Fragment } from 'react';
import Image from 'next/image';

const Intro = () => (
  <Fragment>
    <div
      className={
        'top_author_image w-full h-auto clear-both float-left relative mb-[35px]'
      }>
      <Image
        className={'min-w-full'}
        src={'assets/img/slider/1.jpg'}
        alt={'image'}
        width={1920}
        height={1920}
      />
    </div>
    <div
      className={
        'about_title w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[20px] mb-[30px]'
      }>
      <h3 className={'text-[22px] font-bold'}>{'Anton Lachmaniucu'}</h3>
      <span>{'Senior Mobile Engineer'}</span>
    </div>
    <div
      className={
        'about_text w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[31px] mb-[30px]'
      }>
      <p className={'mb-[11px]'}>
        {
          "Hello, I'm Anton Lachmaniucu, a seasoned senior mobile engineer with over six years of hands-on expertise "
        }
        {'in React Native, React, Next.js, Typescript, CSS, and GraphQL. '}
        {'My focus has been on the dynamic world of mobile development '}
        {
          ", and I've dedicated my career to crafting top-tier mobile applications and solutions. "
        }
      </p>
      <p>
        {
          'My specialty lies in taking innovative concepts and transforming them into fully-functional'
        }
        {
          'mobile platforms, always striving to create user experiences with a unique, '
        }
        {
          'exceptional, and contemporary touch. Drawing from my extensive knowledge of mobile development '
        }
        {
          ', I excel in optimizing complex integrations, ensuring they operate seamlessly '
        }
        {'with minimal maintenance over extended periods. '}
      </p>
    </div>
    <div
      className={
        'tokyo_tm_short_info w-full h-auto clear-both float-left flex border-solid border-[#DFDFDF] border-b pb-[30px] mb-[40px]'
      }>
      <div className={'left w-1/2 pr-[50px]'}>
        <div className={'tokyo_tm_info w-full h-auto clear-both float-left'}>
          <ul className={'m-0 list-none'}>
            <li className={'m-0'}>
              <span
                className={
                  'min-w-[100px] float-left mr-[10px] font-bold text-black'
                }>
                {'Address:'}
              </span>
              <span>{'London, Ontario, Canada'}</span>
            </li>
            <li className={'m-0'}>
              <span
                className={
                  'min-w-[100px] float-left mr-[10px] font-bold text-black'
                }>
                {'Email:'}
              </span>
              <span>
                <a
                  className={
                    'text-[#767676] transition-all duration-300 hover:text-black'
                  }
                  href={'mailto:northboutiquedesign@gmail.com'}>
                  {'northboutiquedesign@gmail.com'}
                </a>
              </span>
            </li>
            <li className={'m-0'}>
              <span
                className={
                  'min-w-[100px] float-left mr-[10px] font-bold text-black'
                }>
                {'Phone:'}
              </span>
              <span>
                <a
                  className={
                    'text-[#767676] transition-all duration-300 hover:text-black'
                  }
                  href={'tel:+(226) 700 7741'}>
                  {'+(226) 700 7741'}
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className={'right w-1/2 pl-[50px]'}>
        <div className={'tokyo_tm_info'}>
          <ul className={'m-0 list-none'}>
            <li className={'m-0'}>
              <span
                className={
                  'min-w-[100px] float-left mr-[10px] font-bold text-black'
                }>
                {'Nationality:'}
              </span>
              <span>{'Canada'}</span>
            </li>
            <li className={'m-0'}>
              <span
                className={
                  'min-w-[100px] float-left mr-[10px] font-bold text-black'
                }>
                {'Interest:'}
              </span>
              <span>{'Machine Learning'}</span>
            </li>
            <li className={'m-0'}>
              <span
                className={
                  'min-w-[100px] float-left mr-[10px] font-bold text-black'
                }>
                {'Freelance:'}
              </span>
              <span>{'Available'}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className={'tokyo_tm_button'} data-position={'left'}>
      <a href={'/assets/cv/AntonLachmaniucuResume.pdf'} download={true}>
        <span>{'Download CV'}</span>
      </a>
    </div>
  </Fragment>
);

export default Intro;
