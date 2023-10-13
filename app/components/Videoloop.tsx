import React from 'react'

const Videoloop = () => {
  return (
    <video autoPlay loop muted playsInline className='flex absolute inset-0 w-full h-full object-cover'>
      <source src="https://github.com/shammy-wst/portfolio-shammy/blob/fixes/public/videos/background.mp4" type="video/mp4" />
    </video>
  )
}

export default Videoloop