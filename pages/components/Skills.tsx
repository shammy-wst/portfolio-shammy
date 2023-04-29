import React from 'react'
import Image from 'next/image'
import figmaImg from '../../public/static/images/figma.png'
import htmlImg from '../../public/static/images/html.png'
import cssImg from '../../public/static/images/css.png'
import jsImg from '../../public/static/images/javascript.png'
import reactImg from '../../public/static/images/react.png'
import gitImg from '../../public/static/images/github1.png'
import firebaseImg from '../../public/static/images/firebase.png'
import tailwindImg from '../../public/static/images/tailwind.png'

function Skills() {
  return (
    <div id='skills' className='w-full lh:h-sceen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#26E8A0]'>
                Skills
            </p>

            <h2 className='py-4'>What I Can Do</h2>
                <div className='grid md:grid-cols-2 lg-grid-cols-4 gap-8'>

                    <div className='bg-[#36344A] p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image 
                                    src={figmaImg}
                                    width="64" 
                                    height="64" 
                                    alt="#"
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>FIGMA</h3>
                            </div>
                        </div>
                    </div>
                    
                    <div className='bg-[#36344A] p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image 
                                    src={htmlImg}
                                    width="64" 
                                    height="64" 
                                    alt="#"
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>
                    
                    <div className='bg-[#36344A] p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image 
                                    src={cssImg}
                                    width="64" 
                                    height="64" 
                                    alt="#"
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>
                    
                    <div className='bg-[#36344A] p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image 
                                    src={jsImg}
                                    width="64" 
                                    height="64" 
                                    alt="#"
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>JavaScript/TS</h3>
                            </div>
                        </div>
                    </div>
                    
                    <div className='bg-[#36344A] p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image 
                                    src={reactImg}
                                    width="64" 
                                    height="64" 
                                    alt="#"
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>React</h3>
                            </div>
                        </div>
                    </div>
                    
                    <div className='bg-[#36344A] p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image 
                                    src={gitImg}
                                    width="64" 
                                    height="64" 
                                    alt="#"
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Github</h3>
                            </div>
                        </div>
                    </div>
                    
                    <div className='bg-[#36344A] p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image 
                                    src={firebaseImg}
                                    width="64" 
                                    height="64" 
                                    alt="#"
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Firebase</h3>
                            </div>
                        </div>
                    </div>
                    
                    <div className='bg-[#36344A] p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image 
                                    src={tailwindImg}
                                    width="64" 
                                    height="64" 
                                    alt="#"
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Tailwind CSS</h3>
                            </div>
                        </div>
                    </div>




                </div>
        </div>

    </div>
  )
}

export default Skills