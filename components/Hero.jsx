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
import Badge from './Badge';
import Socials from './Socials';
import { DevImg } from './DevImg';
import { CardCv } from './ui/CardCv';
import { CardUser } from './ui/CardUser';
import { Github } from './ui/Github';
import { Linkedin } from './ui/Linkedin';
import Typewriter from 'typewriter-effect';


const Hero = () => {
  const cvFileName = 'Nicolas_CV.pdf';
  const cvFilePath = `/assets/${cvFileName}`;

  const handleDownloadCV = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = cvFilePath;
    downloadLink.download = cvFileName;
    downloadLink.click();
  };
 
  return (
    <section className='py-12 xl:py-24 h-[84vh] xl:pt-30 bg-hero_bg bg-bottom bg-cover dark:bg-none'>
      <div className='container mx-auto'>
        <div className='flex justify-between  gap-x-8'>
          

          <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
            <div className='text-2xl uppercase font-semibold mb-4 tracking-[4px]'>
              
                <Typewriter options={{
                strings:"Desarrollador web",
                autoStart:true,
                loop:true
              }}/>
            </div>
            <h1 className='h1 text-2xl mb-4 md:text-7xl  '>Hola, Soy Nicolas Rojas</h1>
            <p className='text-md md:text-2xl max-w-[490px]   mx-auto xl:mx-0 font-bold mt-2'>
            ¡Bienvenido a mi Portafolio Digital!
            Aquí, en este rincón virtual, tienes la oportunidad de sumergirte en mi mundo creativo y 
            descubrir más sobre mi trayectoria, habilidades y pasión por la programación.
            </p>
            
           
            {/* <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
              <Link href='/contact'>
                <Button  className='gap-x-2 rounded-full p-8 ' >
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Button  className='gap-x-2 mb-2 rounded-full p-8'>
                Download CV
                <Download size={18} />
              </Button>
            </div> */}
            <div className='flex  justify-center  gap-2 mt-10  md:flex-row md:items-center'>
            <Github/>
            <Linkedin/>
            </div>

           
            <button onClick={handleDownloadCV} class="block xl:hidden mx-auto rounded-full p-3 text-white font-bold bg-red-600 dark:bg-primary hover:shadow-lime-200 mt-8 flex justify-center">
           

              Descargar CV
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" />
              </svg>
            </button>
          </div>

          <div className='hidden flex justify-center mx-auto xl:flex md:mr-10  mt-10  '>
              
            <CardCv/>
          </div>
        
          
        
        </div>
        <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
          <RiArrowDownSLine className='text-3xl text-primary' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
