// AudioComponent.tsx
'use client';

import { useEffect, useRef } from 'react';

interface AudioComponentProps {
  bgMusicSrc: string;
  clickSoundSrc: string;
  keyPressSoundSrc: string;
  bgMusicVolume?: number; // Optional parameter for background music volume
  hoverSoundSrc: string;
}

const AudioComponent: React.FC<AudioComponentProps> = ({
  bgMusicSrc,
  clickSoundSrc,
  keyPressSoundSrc,
  bgMusicVolume = 0.5, // Default volume is set to 0.5
  hoverSoundSrc,
}) => {
  const bgMusicRef = useRef<HTMLAudioElement>(null);
  const clickSoundRef = useRef<HTMLAudioElement>(null);
  const keyPressSoundRef = useRef<HTMLAudioElement>(null);
  const hoverSoundRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Set the volume for the background music
    if (bgMusicRef.current) {
      bgMusicRef.current.volume = bgMusicVolume;
    }

    const handleMouseClick = () => {
      if (clickSoundRef.current) {
        clickSoundRef.current.play();
      }
    };

    const handleHover = () => {
        if (hoverSoundRef.current) {
          hoverSoundRef.current.play();
        }
      };

    const handleKeyPress = (event: KeyboardEvent) => {
      // Customize this to trigger the sound only for specific keys if needed
      if (keyPressSoundRef.current) {
        keyPressSoundRef.current.play();
      }
    };

    document.addEventListener('click', handleMouseClick);
    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('mouseover', handleHover); // Ajouter l'événement pour le survol

    return () => {
      document.removeEventListener('click', handleMouseClick);
      document.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('mouseover', handleHover);
    };
  }, [bgMusicVolume]);

  return (
    <div>
      <audio ref={bgMusicRef} src={bgMusicSrc} loop autoPlay />
      <audio ref={clickSoundRef} src={clickSoundSrc} />
      <audio ref={keyPressSoundRef} src={keyPressSoundSrc} />
      <audio ref={hoverSoundRef} src={hoverSoundSrc} />
    </div>
  );
};

export default AudioComponent;