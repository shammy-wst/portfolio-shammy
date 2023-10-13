import React from 'react'

const Videoloop = () => {
  return (
    <video autoPlay loop muted playsInline className='flex inset-0 w-full h-full object-cover'>
      <source src="/videos/background.mp4" type="video/mp4" />
    </video>
  )
}

export default Videoloop