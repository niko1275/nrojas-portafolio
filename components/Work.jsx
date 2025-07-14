'use client';
import Link from 'next/link';
import { Button } from './ui/button';


import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ProjectCard from '@/components/ProjectCard';

const projectData = [

    {
    image: '/work/ReelixAPP.png',
    category: 'next js',
    name: 'Reelix',
    description:
      'Pagina Clon de Youtube, Videos Maximo 10 segundos(plan free mux), Creada Con TRCP, Clerk, S3, Drizzle ORM, Mux, Next JS, Tailwind, Shadcn, AWS RDS Y S3.',
    link: '/https://reelix-one.vercel.app/',
    github: '/https://github.com/niko1275/Reelix',
  },
  {
    image: '/work/QuiscoCoffe.png',
    category: 'Next JS',
    name: 'QuiscoCoffe',
    description:
      'Pagina Para la venta De productos de pasteleria, Con panel de administracion, Creado Con Next js, typescript, Auth JS, S3, Tailwind, MercadoPago.',
    link: 'https://quisco-coffe.vercel.app',
    github: 'https://github.com/niko1275',
  },
  {
    image: '/work/socialapp.png',
    category: 'react js',
    name: 'Social App',
    description:
      'Pagina para poder compartir fotos y comentarlas y reaccionar. Creada Con ReactJS, Express y MongoDB ',
    link: 'https://social-app-frontend-xi.vercel.app',
    github: 'https://github.com/niko1275',
  },
  {
    image: '/work/750shots_so.png',
    category: 'Next JS',
    name: 'Admin Dashboard',
    description:
      'Dashboard Para la administracion de un sistema web, creado con Next JS, Prisma, Server Actions, Authjs, S3.',
    link: 'https://dashboard-e.vercel.app/dashboard',
    github: 'https://github.com/niko1275/dashboard-e',
  },
  {
    image: '/work/1.png',
    category: 'next js',
    name: 'Evolve Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/3.png',
    category: 'next js',
    name: 'Ignite Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/4.png',
    category: 'next js',
    name: 'Envision Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/1.png',
    category: 'fullstack',
    name: 'Serenity Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/3.png',
    category: 'fullstack',
    name: 'Nova Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/2.png',
    category: 'fullstack',
    name: 'Zenith Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: 'https://github.com/niko1275',
  },
];

const Work = () => {
  return (
    <section className='relative mb-12 xl:mb-48'>
      <div className='container mx-auto'>
        {/* text */}
        <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
          <h2 className='section-title mb-4'>Ultimos proyectos</h2>
          <p className='subtitle mb-8'>
            Visita o revisa mis ultimos proyectos
          </p>
          <Link href='/projects'>
            <Button>Todos los proyectos</Button>
          </Link>
        </div>
        {/* slider */}
        <div className='xl:max-w-[1000px] xl:absolute right-0 top-0 '>
          <Swiper
            className='h-[480px '
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index} className=''>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
