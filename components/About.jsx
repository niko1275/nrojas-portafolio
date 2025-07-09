

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
  User2,
  MailIcon,
  PhoneCall,
  GraduationCap,
  Briefcase,
  Code,
  Globe,
  Database,
  Layers,
  Award,
} from 'lucide-react';

import { CardUser } from './ui/CardUser';

const infoData = [
  {
    icon: <User2 size={20} />,
    text: 'Nicolas Rojas',
  },
  {
    icon: <PhoneCall size={20} />,
    text: '+56995349521',
  },
  {
    icon: <MailIcon size={20} />,
    text: 'Nicolas.rojas140@inacapmail.cl',
  },

  {
    icon: <GraduationCap size={20} />,
    text: 'Analista Programador',
  }
 
];

const qualificationData = [
  {
    title: 'Eduación',
    data: [
      {
        university: 'Inacap Santiago sur',
        qualification: 'Analista Programador',
        years: '2021 - 2023',
      },
      {
        university: 'Colegio Arzobispo Crescente Errazuriz',
        qualification: 'Eduacacion Media-tecnica en telecomunicaciones',
        years: '2017 - 2019',
      },
 
    ],
  },
  {
    title: 'Experiencia',
    data: [
      {
        company: 'Entel',
        role: 'Practicante Tecnico en telecomunicaciones',
        years: '2019',
      },
    ],
  },
];

const skillData = [
  {
    title: 'skills',
    data: [
      {
        name: 'HTML, CSS, Python, Django',
        icon: <Code size={20} />,
      },
      {
        name: 'Javascript, Reactjs, Nodejs',
        icon: <Globe size={20} />,
      },
      {
        name: 'Express,NextJs',
        icon: <Layers size={20} />,
      },
      {
        name: 'SQL, NoSQL, MongoDB ',
        icon: <Database size={20} />,
      },
    ],
  },
  {
    title: 'tools',
    data: [
      {
        imgPath: '/about/vscode.svg',
      },
      {
        imgPath: '/about/figma.svg',
      },
      {
        imgPath: '/about/notion.svg',
      },
      {
        imgPath: '/about/wordpress.svg',
      },
    ],
  },
];

const certificationData = [
  {
    title: 'Certificaciones',
    data: [
      {
        name: 'AWS Certified Cloud Practitioner',
        issuer: 'AWS',
        year: '2025',
        credential: '86ef2663f34d4bbfa2f5fb09a9fae486',
        credentialUrl: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/86ef2663f34d4bbfa2f5fb09a9fae486',
      },
     
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className='xl:h-[860px] pb-12 xl:py-24'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          Acerca de mi
        </h2>
        <div className='flex flex-col xl:flex-row'>
          {/* image */}

          <div className='hidden xl:flex flex-1 relative'>
            
              <CardUser/>
           
              {/* <DevImg
                styles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom '
                img='/hero/avatar.png'
              /> */}
            
          </div>
       
          <div className='flex-1'>
            <Tabs defaultValue='personal'>
              <TabsList className='w-full grid xl:grid-cols-4 xl:max-w-[680px] xl:border dark:border-none'>
                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className='w-[162px] xl:w-auto'
                  value='qualifications'
                >
                  Formación
                </TabsTrigger>
                <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>
                  Skills
                </TabsTrigger>
                <TabsTrigger className='w-[162px] xl:w-auto' value='certifications'>
                  Certificaciones
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className='text-lg mt-12 xl:mt-8'>
                {/* personal */}
                <TabsContent value='personal'>
                  <div className='text-center xl:text-left'>
                   
                    <p className='subtitle max-w-xl mx-auto xl:mx-0'>
                      Desarrollador Full Stack, con un solido conocimiento teórico y habilidades
                      prácticas en el desarrollo de software, estoy comprometido en expandir mis habilidades 
                      y conocimientos en el campo de las tecnologias.
                    </p>
                    {/* icons */}
                    <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className='flex items-center gap-x-4 mx-auto xl:mx-0'
                            key={index}
                          >
                            <div className='text-primary'>{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                   
                  </div>
                </TabsContent>
            
                <TabsContent value='qualifications'>
                  <div>
                   
                    {/* experience & education wrapper */}
                    <div className='grid md:grid-cols-2 gap-y-8'>
                      {/* experience */}
                      <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                          <Briefcase />
                          <h4 className='capitalize font-medium'>
                            {getData(qualificationData, 'Experiencia').title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificationData, 'Experiencia').data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className='flex gap-x-8 group' key={index}>
                                  <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                  </div>
                                  <div>
                                    <div className='font-semibold text-xl leading-none mb-2'>
                                      {company}
                                    </div>
                                    <div className='text-lg leading-none text-muted-foreground mb-4'>
                                      {role}
                                    </div>
                                    <div className='text-base font-medium'>
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                          <GraduationCap size={28} />
                          <h4 className='capitalize font-medium'>
                            {getData(qualificationData, 'Eduación').title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificationData, 'Eduación').data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className='flex gap-x-8 group' key={index}>
                                  <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                  </div>
                                  <div>
                                    <div className='font-semibold text-xl leading-none mb-2'>
                                      {university}
                                    </div>
                                    <div className='text-lg leading-none text-muted-foreground mb-4'>
                                      {qualification}
                                    </div>
                                    <div className='text-base font-medium'>
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value='skills'>
                  <div className='text-center xl:text-left'>
                    
                    {/* skills */}
                    <div className='mb-16'>
                      <h4 className='text-xl font-semibold mb-4'>Skills</h4>
                      <div className='border-b border-border mb-6'></div>
                      {/* skill list */}
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {getData(skillData, 'skills').data.map(
                          (item, index) => {
                            const { name, icon } = item;
                            return (
                              <div
                                className='bg-card border border-border rounded-lg p-4 hover:bg-accent/50 transition-colors duration-200'
                                key={index}
                              >
                                <div className='flex items-center gap-3 justify-center xl:justify-start'>
                                  <div className='text-primary'>{icon}</div>
                                  <div className='font-medium'>{name}</div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* tools */}
                    {/* <div>
                      <h4 className='text-xl font-semibold mb-2 xl:text-left'>
                        Tools
                      </h4>
                      <div className='border-b border-border mb-4'></div>
                    
                      <div className='flex gap-x-8 justify-center xl:justify-start'>
                        {getData(skillData, 'tools').data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div key={index}>
                              <Image
                                src={imgPath}
                                width={48}
                                height={48}
                                alt=''
                                priority
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div> */}
                  </div>
                </TabsContent>
                {/* certifications */}
                <TabsContent value='certifications'>
                  <div className='text-center xl:text-left'>
                    <h4 className='text-xl font-semibold mb-4'>Certificaciones Profesionales</h4>
                    <div className='border-b border-border mb-6'></div>
                    <div className='grid grid-cols-1 gap-4'>
                      {getData(certificationData, 'Certificaciones').data.map(
                        (item, index) => {
                          const { name, issuer, year, credential, credentialUrl } = item;
                          return (
                            <div
                              className='bg-card border border-border rounded-lg p-4 hover:bg-accent/50 transition-colors duration-200'
                              key={index}
                            >
                              <div className='flex items-center gap-3 mb-2'>
                                <div className='text-primary'>
                                  <Award size={20} />
                                </div>
                                <div className='font-semibold text-lg'>{name}</div>
                              </div>
                              <div className='ml-8 space-y-1'>
                                <div className='text-muted-foreground'>
                                  <span className='font-medium'>Emisor:</span> {issuer}
                                </div>
                                <div className='text-muted-foreground'>
                                  <span className='font-medium'>Año:</span> {year}
                                </div>
                                <div className='text-muted-foreground'>
                                  <span className='font-medium'>Credencial:</span>{' '}
                                  {credentialUrl ? (
                                    <a
                                      href={credentialUrl}
                                      target='_blank'
                                      rel='noopener noreferrer'
                                      className='text-primary hover:underline transition-colors duration-200'
                                    >
                                      {credential}
                                    </a>
                                  ) : (
                                    credential
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
