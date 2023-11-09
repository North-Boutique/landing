import Image from 'next/image';

const knowledge = [
  { id: 1, text: 'React Native, Redux' },
  { id: 2, text: 'React, Typescript' },
  { id: 3, text: 'CSS, Sass, Less' },
  { id: 4, text: 'REST, GraphQL, Apollo' },
  { id: 5, text: 'Ruby On Rails, Postgres' },
];
const interests = [
  { id: 1, text: 'Mobile Engineering' },
  { id: 2, text: 'Mobile Application Optimization' },
  { id: 3, text: 'UI/UX Development' },
  { id: 4, text: 'Web Development' },
  { id: 5, text: 'Site SEO' },
];

const KnowledgeInterests = () => (
  <div
    className={
      'tokyo_tm_skillbox w-full h-auto clear-both float-left pt-[90px] pr-[0px] pb-[90px] pl-[0px]'
    }>
    <div className={'container'}>
      <div className={'in w-full h-auto clear-both float-left flex'}>
        <div className={'left w-1/2 pr-[50px]'}>
          <div
            className={
              'tokyo_section_title w-full h-auto clear-both float-left mb-[40px]'
            }>
            <h3 className={'text-[20px] font-bold'}>{'Knowledge'}</h3>
          </div>
          <div
            className={
              'tokyo_tm_skill_list w-full h-auto clear-both float-left'
            }>
            <ul className={'m-0 list-none'}>
              {knowledge.map((item) => (
                <li className={'m-0 pl-[25px] relative'} key={item.id}>
                  <span>
                    <Image
                      className={
                        'svg text-black w-[10px] h-[10px] absolute left-0 top-1/2 translate-y-[-50%]'
                      }
                      src={'assets/img/svg/rightarrow.svg'}
                      alt={'image'}
                      width={20}
                      height={20}
                    />
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={'right w-1/2 pl-[50px]'}>
          <div
            className={
              'tokyo_section_title w-full h-auto clear-both float-left mb-[40px]'
            }>
            <h3 className={'text-[20px] font-bold'}>{'Interests'}</h3>
          </div>
          <div
            className={
              'tokyo_tm_skill_list w-full h-auto clear-both float-left'
            }>
            <ul className={'m-0 list-none'}>
              {interests.map((item) => (
                <li className={'m-0 pl-[25px] relative'} key={item.id}>
                  <span>
                    <Image
                      className={
                        'svg text-black w-[10px] h-[10px] absolute left-0 top-1/2 translate-y-[-50%]'
                      }
                      src={'assets/img/svg/rightarrow.svg'}
                      alt={'image'}
                      width={20}
                      height={20}
                    />
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default KnowledgeInterests;
