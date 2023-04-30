import React from 'react'
import Link from "next/link";
import Image from "next/image";
import cvImg from '../../public/static/images/curriculum.png'
function resume() {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#26E8A0]'>resume</p>
                    <h2 className='py-4'>Here's everything you'll need to know</h2>

                    <p className='py-6 text-white'>Right there you'll find my resume (yes it is more conventional)</p>

                    <p className='py-6 text-white'>You'll find inside it all the informations you'd dream to have about me ! </p>

                    <p className='py-6 text-white'>
                        And if it is not enough, you can still contact me, I'll be happy to answer you ! (Or you can check my LinkedIn profile)
                    </p>
                    <div className={"py-6"}>
                            <Link className="cursor-pointer underline" href='/static/images/Resume.pdf' target="_blank">Resume or Curriculum Vitae</Link>
                    </div>
                    <div className={"py-10"}>
                        <Link href='/#contact' className='tracking-widest font-bold text-[#26E8A0] py-2 underline cursor-pointer'>
                            Contact me !
                        </Link>
                    </div>
                </div>

                <div className='w-full h-auto m-auto shadow-xl shadow-[#363636] rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Link href="/static/images/Resume.pdf" target="_blank">
                        <Image
                            className='rounded-xl'
                            src={cvImg}
                            alt="curriculumVitae"/>
                    </Link>

                </div>
            </div>
        </div>
)
}

export default resume