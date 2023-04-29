import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-white'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-white'>
            Hi, I&#39;m <span className='text-[#26E8A0]'> Icham</span>
          </h1>
          <h1 className='py-2 text-white'>A Creative Front-End Web Developer</h1>
          <p className='py-4 text-white sm:max-w-[70%] m-auto'>
          Im a creative front-end web developer specializing in building and design exceptional digital experiences. Currently, I'm a student at HETIC in Paris. Im focused on building responsive, accessible, and performant websites and applications while learning back-end technologies.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/aichammmadi/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-[#363636] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/shammy-wst'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-[#363636] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-[#363636] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='https://drive.google.com/file/d/1gmmupTcYoXA1mWP-wx7KuoSzZusKrblU/view?usp=sharing' about='_blank'>
              <div className='rounded-full shadow-lg shadow-[#363636] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;