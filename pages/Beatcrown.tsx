import React from 'react'
import Image from 'next/image'
import BeatcrownImg from '../public/static/images/beatcrown.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const Beatcrown = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
            className='absolute z-1 object-cover w-full h-[50vh]'
            width={1920}
            height={1080}

            src={BeatcrownImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Beatcrown Design</h2>
          <h3>Figma</h3>
        </div>
      </div>
      <div>
          <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
              <p>Project</p>
              <h2>Overview</h2>
              <p>This app was built using Figma, to access it you'll need to open the figma link bellow. This is a pretty simple design of a streaming music web app like Spotify,This project was part of a communication and management project during my first year at my School.
              </p>

                <Link href='https://www.figma.com/file/MXSxPr8SrU8JK0FZInK1Xf/Dashblade---APP?node-id=0%3A1&t=xsqJVcC2zNVSWjO8-1' target="_blank">
                    <button className='px-8 py-2 mt-4 mr-8'>Figma</button>
                </Link>
                <button className='px-8 py-2 mt-4 mr-8'>Code in progress</button>
              
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-black rounded-xl p-4'>
              <div className='p-2'>
                  <p className='text-center font-bold pb-2'>Technologies</p>
                  <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-white py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Figma
                        </p>
                        <p className='text-white py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>MaterialIcons
                        </p>
                        <p className='text-white py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Google
                        </p>
                        <p className='text-white py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Spotify
                        </p>
                        <p className='text-white py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Soundcloud
                        </p>
                        <p className='text-white py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>TMDB API
                        </p>
                        
                  </div>
              </div>
            </div>
            <Link href='/#projects'>
            <p className='underline cursor-pointer'>Back</p>
          </Link>
          </div>
        </div>
    </div>
  )
}

export default Beatcrown