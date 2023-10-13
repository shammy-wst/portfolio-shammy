import React from 'react'

const Videoloop = () => {
  return (
    <div className='absolute top-0 left-0 z-0 h-screen sm:h-1/2 md:h-full'>
        
        <video autoPlay loop muted playsInline className='flex inset-0 w-screen h-screen object-cover z-0'>
        <source src="/videos/background.mp4" type="video/mp4" />
        </video>
        <div className='relative z-10'></div>
        <div className="absolute inset-0 bg-black opacity-80 after:absolute after:inset-0 content-['']"></div>
    </div>
  )
}

export default Videoloop