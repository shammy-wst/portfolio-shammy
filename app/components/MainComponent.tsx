import React from 'react'
import Image from 'next/image'

const MainComponent = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
          <figure className='scale-75' style={{ width: '400px', height: '400px' }}>
            <Image 
            src="/assets/cube.gif" 
            alt="CubeGif" 
            width={500} 
            height={500}
            className=''
             />
        </figure>
        <h1 className='fixed bottom-72 uppercase font-extrabold text-3xl'>
            <span className='text-[#E733FF]'>s</span>
            <span className='text-[#FE2396]'>h</span>
            <span className='text-[#FF6F64]'>a</span>
            <span className='text-[#FF8E2D]'>m</span>
            <span className='text-[#FFD525]'>m</span>
            <span className='text-[#FFEE15]'>y</span>
            </h1>
    </div>
  )
}

export default MainComponent


