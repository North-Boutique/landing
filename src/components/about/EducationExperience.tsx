const experiencesData = [
  {
    id: 1,
    date: 'Sept 2023 - Now',
    designation: 'Mobile Lead',
    company: 'Hypercard Inc.',
  },
  {
    id: 2,
    date: 'Apr 2023 - Mar 2024',
    designation: 'Senior Mobile Engineer',
    company: 'Intellitix Inc.',
  },
  {
    id: 3,
    date: '2022 - 2023',
    designation: 'Senior Software Engineer',
    company: 'Stadium Live',
  },
  {
    id: 4,
    date: '2021 - 2022',
    designation: 'Software Engineer',
    company: 'Coinberry Ltd.',
  },
  {
    id: 5,
    date: '2019 - 2021',
    designation: 'Software Engineer',
    company: 'FundThrough Inc.',
  },
];

const EducationExperience = () => (
  <div
    className={
      'tokyo_tm_resumebox w-full h-auto clear-both float-left bg-white py-[93px] px-0'
    }>
    <div className={'container'}>
      <div className={'in w-full h-auto clear-both float-left flex'}>
        <div className={'left w-1/2 pl-[50px]'}>
          <div
            className={
              'tokyo_section_title w-full h-auto clear-both float-left mb-[40px]'
            }>
            <h3 className={'text-[20px] font-bold'}>{'Experience'}</h3>
          </div>
          <div
            className={
              'tokyo_tm_resume_list w-full h-auto clear-both float-left'
            }>
            <ul className={'m-0 list-none relative inline-block pt-[10px]'}>
              {experiencesData.map((exp, i) => (
                <li
                  className={`m-0 w-full float-left relative pl-[20px] ${
                    i === experiencesData.length - 1 ? '' : 'pb-[45px]'
                  }`}
                  key={exp.id}>
                  <div
                    className={
                      'list_inner  w-full h-auto clear-both float-left relative flex'
                    }>
                    <div className={'time w-1/2 pr-[20px]'}>
                      <span
                        className={
                          'inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap'
                        }>
                        {exp.date}
                      </span>
                    </div>
                    <div className={'place w-1/2 pl-[20px]'}>
                      <h3 className={'text-[16px] mb-[2px] font-semibold'}>
                        {exp.company}
                      </h3>
                      <span className={'text-[14px]'}>{exp.designation}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default EducationExperience;
