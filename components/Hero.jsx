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

const Hero = () => {
  return (
    <section className='py-12 xl:py-24 h-[84vh] xl:pt-30 bg-hero_bg bg-bottom bg-cover dark:bg-none'>
      <div className='container mx-auto'>
        <div className='flex justify-between  gap-x-8'>
  
          <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
            <div className='text-sm uppercase font-semibold mb-4 tracking-[4px]'>
              Desarrollador web
            </div>
            <h1 className='h1 mb-4 '>Hola, Soy Nicolas Rojas</h1>
            <p className='subtitle max-w-[490px] text-white mx-auto xl:mx-0'>
              Brief description with insights into myself, my vocational
              journey, and what I engage in professionally.
            </p>
           
            <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
              <Link href='/contact'>
                <Button  className='gap-x-2 rounded-full p-8 ' >
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Button  className='gap-x-2 mb-2 rounded-full p-8'>
                Download CV
                <Download size={18} />
              </Button>
            </div>
         
            <Socials 
              containerStyles='flex gap-x-4  mx-auto xl:mx-12'
              iconsStyles='text-foreground text-[22px] hover:text-primary transition-all'
            />
          </div>

          <DevImg
              styles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom'
              img='/hero/avatar.png'
            />
        </div>
        <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
          <RiArrowDownSLine className='text-3xl text-primary' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
