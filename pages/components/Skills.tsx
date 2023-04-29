import React from 'react'
import Image from 'next/image'

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
                                    src="/../public/assets/skills/figma.png" 
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
                                    src="/../public/assets/skills/html.png" 
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
                                    src="/../public/assets/skills/css.png" 
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
                                    src="/../public/assets/skills/javascript.png" 
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
                                    src="/../public/assets/skills/react.png" 
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
                                    src="/../public/assets/skills/github1.png" 
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
                                    src="/../public/assets/skills/firebase.png" 
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
                                    src="/../public/assets/skills/tailwind.png" 
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