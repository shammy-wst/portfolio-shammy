import React from 'react';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <div className='flex flex-col w-full h-screen justify-center items-center'>
        <div className='bg-black fixed w-full h-full z-10 opacity-90'>
        </div>
      <figure className="w-full h-screen overflow-hidden">
        <Image
          src="/assets/bgaboutme.gif"
          alt="CubeGif"
          layout="fill"
          objectFit="cover"
          priority
        />
      </figure>
      <div className='flex fixed z-10 flex-col border-2 w-4/5 gap-6 p-4'>
        <h1 className="text-4xl text-center uppercase rainbow-text">About Me</h1>
        <p className="text-center text-xl text-white tracking-wide">
          I&apos;m <span className='hover:underline rainbow-text'><a target="_blank" href="https://www.linkedin.com/in/aichammmadi/">Icham</a></span> a 20 years old student in computer science, I&apos;m passionate about
          web development especially in the blockchain. I&apos;m currently working at <span className='hover:underline rainbow-text'><a target="_blank" href="https://staky.io/">Staky.Io</a></span> as a Junior Blockhain Dev.
        </p>
        <p className="text-center text-xl text-white tracking-wide">
          When im not coding, Im on the football fields, im currently playing for <span className='hover:underline rainbow-text'><a target="_blank" href="https://www.afc-templiers.net/">Les Templiers d&apos;Elancourt</a></span> in the U19 National League. I&apos;m also a big fan of the NBA and the NFL and obviously Video Games.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
