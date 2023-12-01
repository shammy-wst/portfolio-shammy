// LoaderComponent.tsx

'use client';

// LoaderComponent.tsx

// LoaderComponent.tsx

import React, { useState } from 'react';
import AudioComponent from '../AudioComponent/AudioComponent'; // Import your AudioComponent

interface LoaderComponentProps {
  bgMusicSrc: string;
  clickSoundSrc: string;
  keyPressSoundSrc: string;
  hoverSoundSrc: string; // Ajouter le son de survol
}

const LoaderComponent: React.FC<LoaderComponentProps> = ({
  bgMusicSrc,
  clickSoundSrc,
  keyPressSoundSrc,
  hoverSoundSrc,
}) => {
  const [loaderVisible, setLoaderVisible] = useState(true);

  const handleLoaderClose = () => {
    setLoaderVisible(false);
    const clickSound = new Audio(clickSoundSrc);
    clickSound.play();
  };

  const handleHover = () => {
    // Jouer le son de survol
    const hoverSound = new Audio(hoverSoundSrc); // Utilisez hoverSoundSrc ici
    hoverSound.play();
  };

  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black ${loaderVisible ? 'block' : 'hidden'} z-20`}>
      <div className="text-white text-center uppercase font-bold w-2/5">
      <h1 className="text-6xl font-bold pb-5">WARNING-HEALTH AND SAFETY</h1>
      <h2 className='text-xl'>
          Before clicking, read your operations manual for important information
          about your health and safety.
        </h2>
        <p className='text-xl'>This fantastic website was created by Shammyツ</p>
        <p className="normal-case text-xl">All rights reserved</p>
        <p className="pb-20 lowercase text-xl">https://www.linkedin.com/in/aichammmadi/</p>
        <p className='animate-bounce-slow'>
          Press
          <span onMouseEnter={handleHover}onClick={handleLoaderClose} className="bg-transparent border-2 border-white text-white m-2 px-2 py-1 rounded-full hover:bg-white hover:text-black">
            A
          </span>
          to continue
        </p>
        
      </div>

      {!loaderVisible && (
        <AudioComponent
          bgMusicSrc={bgMusicSrc}
          clickSoundSrc={clickSoundSrc}
          keyPressSoundSrc={keyPressSoundSrc}
          hoverSoundSrc='https://bored-bucket.s3.eu-west-3.amazonaws.com/hover.mp3'
        />
      )}
    </div>
  );
};

export default LoaderComponent;
