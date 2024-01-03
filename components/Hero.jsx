import Link from 'next/link';
import { Button } from './ui/button';
import { Download, Send } from 'lucide-react';

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from 'react-icons/ri';

import {
  RiLinkedinFill,
  RiGithubFill,
} from 'react-icons/ri';

import Badge from './Badge';
import Socials from './Socials';
import { DevImg } from './DevImg';
import { CardCv } from './ui/CardCv';
import { CardUser } from './ui/CardUser';
import { Github } from './ui/Github';
import { Linkedin } from './ui/Linkedin';
const Hero = () => {
  return (
    <section className='py-12 xl:py-24 h-[84vh] xl:pt-30 bg-hero_bg bg-bottom bg-cover dark:bg-none'>
      <div className='container mx-auto'>
        <div className='flex justify-between  gap-x-8'>
          

          <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
            <div className='text-2xl uppercase font-semibold mb-4 tracking-[4px]'>
              Desarrollador web
            </div>
            <h1 className='h1 text-2xl mb-4 md:text-7xl  '>Hola, Soy Nicolas Rojas</h1>
            <p className='text-xs md:text-2xl max-w-[490px]   mx-auto xl:mx-0 font-bold mt-2'>
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
