import React from 'react'
import {
    RiLinkedinFill,
  } from 'react-icons/ri';

export const Linkedin = () => {
  return (
    <div>
        <section class="flex justify-center items-center">
            <button
                class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                href="/"
            >
               <RiLinkedinFill className='text-5xl'/>
                <span
                class="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700 dark:text-white dark:group-hover:text-white"
                >
                Linkedin
                </span>
            </button>
            </section>

    </div>
  )
}
