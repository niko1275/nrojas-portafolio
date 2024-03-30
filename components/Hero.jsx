'use client'
import Link from 'next/link';
import { Button } from './ui/button';
import { Download, Send } from 'lucide-react';

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from 'react-icons/ri';

import { CardCv } from './ui/CardCv';
import { Github } from './ui/Github';
import { Linkedin } from './ui/Linkedin';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      transition: {
        type: 'tween',
        duration: 1.5,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.4,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};


const Hero = () => {
  const cvFileName = 'NRojasCV.pdf';
  const cvFilePath = `/assets/${cvFileName}`;

  const handleDownloadCV = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = cvFilePath;
    downloadLink.download = cvFileName;
    downloadLink.click();
  };

  return (
    <section className='py-12 xl:py-24 h-[calc(100vh-96px)] xl:pt-30 bg-hero_bg bg-[0px_-800px] bg-no-repeat bg-cover dark:bg-none'>
      <div className='container mx-auto h-full'>
        <div className='flex justify-between gap-x-8 h-full relative'>
          <div className='flex max-w-[600px] h-full flex-col justify-between items-center mx-auto xl:mx-0 text-center xl:text-left py-10'>
         {/*    <motion.div
              variants={fadeIn('right', 0)}
              initial='hidden'
              animate='show'
              exit='hidden'
            > */}
              <div
                className='text-2xl uppercase font-semibold mb-4 tracking-[4px] h-8'
              >
                <Typewriter options={{
                  strings: "Desarrollador web",
                  autoStart: true,
                  loop: true
                }} />
              </div>
              <h1 className='h1 text-2xl mb-4 md:text-7xl  '>Hola, Soy Nicolas Rojas</h1>
            {/* </motion.div> */}
            {/* <motion.div
              variants={fadeIn('up', 0)}
              initial='hidden'
              animate='show'
              exit='hidden'
            > */}
              <p className='text-md md:text-2xl text-center mx-auto xl:mx-0 font-bold mt-2'>
                ¡Bienvenido a mi Portafolio Digital!
                Aquí, en este rincón virtual, tienes la oportunidad de sumergirte en mi mundo creativo y
                descubrir más sobre mi trayectoria, habilidades y pasión por la programación.
              </p>
              <div className='flex  justify-center  gap-2 mt-10  md:flex-row md:items-center'>
                <Link href={'https://github.com/niko1275'}>
                  <Github />
                </Link>
                <Link href={'https://www.linkedin.com/in/nicolas-ignacio-rojas-huanquitripay-2a647b284/'}>
                <Linkedin />
                </Link>
              </div>
            {/* </motion.div> */}
            <button onClick={handleDownloadCV} className="xl:hidden mx-auto rounded-full p-3 text-white font-bold bg-red-600 dark:bg-primary hover:shadow-lime-200 mt-8 flex justify-center">


              Descargar CV
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" />
              </svg>
            </button>
          </div>
         {/*  <motion.div
            className='hidden justify-end items-end xl:flex mt-10 absolute bottom-0 -right-[50px]'
            variants={fadeIn('up', 0)}
            initial='hidden'
            animate='show'
            exit='hidden'
          > */}
          <div className='hidden justify-end items-end xl:flex mt-10 absolute bottom-0 -right-[50px]'>
             <CardCv/>
          </div>
           
         {/*  </motion.div> */}
        </div>
        <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
          <RiArrowDownSLine className='text-3xl text-primary' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
