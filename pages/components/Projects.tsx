import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import afpaImg from '../../public/assets/projects/afpa.png'
import FlixhiveImg from '../../public/assets/projects/flixhive.jpg'
import DashbladeImg from '../../public/assets/projects/dashblade.png'
import BeatcrownImg from '../../public/assets/projects/beatcrown.png'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#26E8A0]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem 
                    title='AFPA - Redesign (Vanilla HTML/CSS/JS)' 
                    backgroundImg={afpaImg} 
                    projectUrl='/afpa' 
                    
                />
                 <ProjectItem 
                    title='FlixHive - A Movie App (NextJS, Tailwind, Firebase)' 
                    backgroundImg={FlixhiveImg} 
                    projectUrl='/FlixHive' 
                />
                 <ProjectItem 
                    title='Dashblade - A Mobile Crypto App (Design)' 
                    backgroundImg={DashbladeImg} 
                    projectUrl='/Dashblade' 
                />
                 <ProjectItem 
                    title='Beatcrown - A Music Player (Design)' 
                    backgroundImg={BeatcrownImg} 
                    projectUrl='/Beatcrown' 
                />
            </div>

        </div>

    </div>
  )
}

export default Projects