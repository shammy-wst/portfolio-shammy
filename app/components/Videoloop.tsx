import React from 'react'

const Videoloop = () => {
  return (
    <div className='relative h-screen sm:h-1/2 md:h-full'>
        <video autoPlay loop muted playsInline className='flex inset-0 w-screen h-screen object-cover'>
        <source src="/videos/background.mp4" type="video/mp4" />
        </video>
    </div>
  )
}

export default Videoloop