import React from 'react'
import Image from 'next/image'
import afpaImg from '../public/static/images/afpa.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const afpa = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                <Image
                    className='absolute z-1 object-cover w-full h-[50vh]'
                    width={1920}
                    height={1080}

                    src={afpaImg}
                    alt='/'
                />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Afpa Re-Design + Coding</h2>
                    <h3>HTML/CSS JS Vanilla</h3>
                </div>
            </div>
            <div>
                <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                    <div className='col-span-4'>
                        <p>Project</p>
                        <h2>Overview</h2>
                        <p>This app was built using native HTML CSS and JS and isnt hosted, to acces it you'll need to download it on GitHub and run it on your own system. This is a pretty simple rework of the AFPA Website, the design was entirely made by me.This project was my very first attempt of doing a Website during my first year at my School.
                        </p>
                        <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
                        <button className='px-8 py-2 mt-4 mr-8'>Code</button>
                    </div>
                    <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-[#36344A] rounded-xl p-4'>
                        <div className='p-2'>
                            <p className='text-center font-bold pb-2'>Technologies</p>
                            <div className='grid grid-cols-3 md:grid-cols-1'>
                                <p className='text-white py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>HTML
                                </p>
                                <p className='text-white py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>CSS
                                </p>
                                <p className='text-white py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>JavaScript
                                </p>
                                <p className='text-white py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Figma
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

export default afpa