import React from 'react'
import Image from 'next/image'
import { AiOutlineMail } from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Link from 'next/link'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import contactImg from '../../public/static/images/selfie.png'


function Contact() {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className="text-xl tracking-widest uppercase text-[#26E8A0]">
            Contact
            </p>
            <h2 className='py-4'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
{/* Left Side */}
            <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-black rounded-xl p-4'>
                <div className='lg:p-4 h-full'>
                    <div>
                        <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={contactImg} width={900} height={700} alt='image-contact'/>
                    </div>
                    <div>
                        <h2 className='py-2'>
                            Icham
                        </h2>
                        <p>Creative Front-End Developer</p>
                        <p>Paris, France</p>
                        <p className='py-4'>I am available for Internship or Coop Student positions. Contact me and let's talk.</p>
                    </div>
                        <div>
                        <p className='uppercase pt-8'>Connect With Me</p>
                        <div className='flex items-center justify-between py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaLinkedinIn/>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaGithub/>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiOutlineMail/>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <BsFillPersonLinesFill/>
                            </div>
                        </div>
                </div>
                </div>
            </div>

{/* Right Side */}
<div className='col-span-3 w-full h-auto shadow-xl shadow-black rounded-xl lg:p-4'>
    <div className='p-4'>
        <form>
            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input className="border-2 rounded-lg p-3 flex border-[#36344A]" type='text'/>
                </div>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Phone Number</label>
                    <input className="border-2 rounded-lg p-3 flex border-[#36344A]" type='text'/>
                </div>
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Email</label>
                <input className="border-2 rounded-lg p-3 flex border-[#36344A]" type='email'/>
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Subject</label>
                <input className="border-2 rounded-lg p-3 flex border-[#36344A]" type='text'/>
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Message</label>
                <textarea rows={10}
                    className='form-control border-2 rounded-lg p-3 border-[#36344A]'
                    placeholder='Message' 
                    >
                </textarea>
            </div>
            <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
        </form>
    </div>
</div>
        </div>
            <div className='flex justify-center py-12'>
                <Link href='/'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp className='text-[#26E8A0]' size={30} />
                    </div>
                </Link>
            </div>
            
        </div>
    </div>
  )
}

export default Contact