'use client';
import React, { useState } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';

const projectData = [

   {
    image: '/work/ReelixAPP.png',
    category: 'Next JS',
    name: 'Reelix',
    description:
      'Pagina Clon de Youtube, Videos Maximo 10 segundos(plan free mux), Creada Con TRCP, Clerk, S3, Drizzle ORM, Mux, Next JS, Tailwind, Shadcn, AWS RDS Y S3.',
    link: '/',
    github: '/',
  },
    {
      image:'/work/750shots_so.png',
      category:'Next JS',
      name:'Admin Dashboard',
      description:'Dashboard Para la administracion de un sistema web, creado con Next JS, Prisma, Server Actions, Authjs, S3.',
      link:'https://dashboard-e.vercel.app/dashboard',
      github:'https://github.com/niko1275/dashboard-e',
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
        category: 'React JS',
        name: 'Social App',
        description:
          'Pagina para poder compartir fotos y comentarlas y reaccionar Creada Con ReactJS,TailwindCSS,Express y MongoDB',
        link: 'https://social-app-frontend-xi.vercel.app',
        github: 'https://github.com/niko1275',
      },

];

// remove category duplicates
const uniqueCategories = [
  'all projects',
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects');

  const filteredProjects = projectData.filter((project) => {
    // if category is 'all projects' return all projects, else filter by category
    return category === 'all projects'
      ? project
      : project.category === category;
  });

  return (
    <section className='min-h-screen pt-12'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          Mis Proyectos
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className='capitalize w-[162px] md:w-auto'
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
