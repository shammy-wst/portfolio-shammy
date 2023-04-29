import React from 'react'
import Image from 'next/image'
import aboutImg from '../../public/static/images/about.jpeg'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#26E8A0]'>About</p>
                <h2 className='py-4'>Who I Am</h2>

                <p className='py-2 text-white'>Not you're usual developper i guess</p>

                <p className='py-2 text-white'>I have spent my entire chilhood finding myself in new technologies. I've always had a knack for technology and woring with computers, i've touched mr first PC at 8 years old. In 2016 i've started working with HTML & CSS bases to create little websites to make laugh my friends. What I thought was just a few small jokes turned into a love for programming. </p>

                <p className='py-2 text-white'>
                    Fascinated with how many things you can do with programming, i've decided to put my hands in the mud to know more about programming. I've started to learn Javascript and ReactJS to create more complex websites. I've also started to learn back-end technologies like NodeJS and ExpressJS to create my own API and to be able to create full-stack applications.
                    I've also a real interess about the UI/UX design, i've started to learn Figma to create my own design and to be able to create my own website from scratch.
                </p>
                <p className='py-2 text-white underline cursor-pointer'>
                    Check out some of my latest projects.
                </p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-black rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image
                className='rounded-xl' 
                src={aboutImg}
                alt="image-icham"/>
            </div>
        </div>
    </div>
  )
}

export default About