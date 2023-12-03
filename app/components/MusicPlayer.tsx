// components/MusicPlayer.tsx

"use client";

import React, { useRef, useState } from "react";
import '../globals.css'

const MusicPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handlePlayPause = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      if (audioElement.paused) {
        audioElement.play();
      } else {
        audioElement.pause();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteToggle = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.muted = !audioElement.muted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audioElement = audioRef.current;
    const volume = parseFloat(e.target.value);
    if (audioElement) {
      audioElement.volume = volume;
    }
  };

  return (
    <div className="flex items-center justify-center h-full opacity-50">
      <audio ref={audioRef} autoPlay>
        <source
          src="https://bored-bucket.s3.eu-west-3.amazonaws.com/Sleep+Music+-+Deep+Space+-+30+Minutes.mp3"
          type="audio/mpeg"
        />
        Your web browser does not support the audio element.
      </audio>

      <div className="hidden fixed bottom-0 justify-between lg:flex gap-2 flex-row m-9 p-4">
        <svg
          width="12"
          height="20"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handlePlayPause}
        >
          {isPlaying ? (
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 0.5C1.13261 0.5 1.25979 0.552679 1.35355 0.646447C1.44732 0.740215 1.5 0.867392 1.5 1V9C1.5 9.13261 1.44732 9.25979 1.35355 9.35355C1.25979 9.44732 1.13261 9.5 1 9.5C0.867392 9.5 0.740215 9.44732 0.646447 9.35355C0.552679 9.25979 0.5 9.13261 0.5 9V1C0.5 0.867392 0.552679 0.740215 0.646447 0.646447C0.740215 0.552679 0.867392 0.5 1 0.5ZM5 0.5C5.13261 0.5 5.25979 0.552679 5.35355 0.646447C5.44732 0.740215 5.5 0.867392 5.5 1V9C5.5 9.13261 5.44732 9.25979 5.35355 9.35355C5.25979 9.44732 5.13261 9.5 5 9.5C4.86739 9.5 4.74021 9.44732 4.64645 9.35355C4.55268 9.25979 4.5 9.13261 4.5 9V1C4.5 0.867392 4.55268 0.740215 4.64645 0.646447C4.74021 0.552679 4.86739 0.5 5 0.5Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              width="7"
              height="9"
              viewBox="0 0 7 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 4.5L0.673077 8.57077L0 9V0L7 4.5ZM5.72115 4.5L0.673077 1.24615V7.75385L5.72115 4.5Z"
                fill="white"
              />
            </svg>
          )}
        </svg>

          <input
  type="range"
  min="0"
  max="1"
  step="0.01"
  onChange={handleVolumeChange}
  className=" w-6/12 h-0.5 rounded-md appearance-none bg-white mx-auto"
  style={{ '--thumb-color': 'red !important' } as React.CSSProperties}
/>
<svg
            width="26"
            height="20"
            viewBox="0 0 13 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleMuteToggle}
          >
            {isMuted ? (
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5359 12.01C11.3264 11.2217 11.9533 10.2849 12.3807 9.25348C12.808 8.22208 13.0272 7.1164 13.0259 5.99999C13.0272 4.88358 12.808 3.7779 12.3807 2.7465C11.9533 1.7151 11.3264 0.778318 10.5359 -0.0100098L9.82788 0.69699C10.5254 1.39258 11.0786 2.21916 11.4556 3.12923C11.8327 4.0393 12.0261 5.01491 12.0249 5.99999C12.0249 8.07099 11.1849 9.94599 9.82788 11.303L10.5359 12.01Z"
                  fill="white"
                />
                <path
                  d="M9.12106 10.596C9.72554 9.99311 10.2049 9.27672 10.5317 8.48798C10.8584 7.69925 11.0261 6.85373 11.0251 5.99999C11.0261 5.14626 10.8584 4.30073 10.5317 3.512C10.2049 2.72327 9.72554 2.00688 9.12106 1.40399L8.41406 2.11099C8.92554 2.62114 9.33117 3.22733 9.60764 3.89473C9.88411 4.56213 10.026 5.27759 10.0251 5.99999C10.0262 6.72249 9.88459 7.43809 9.6083 8.10567C9.332 8.77325 8.92648 9.37964 8.41506 9.88999L9.12106 10.596Z"
                  fill="white"
                />
                <path
                  d="M9.025 5.99996C9.02577 6.59102 8.90973 7.17641 8.68354 7.72249C8.45735 8.26856 8.12548 8.76455 7.707 9.18196L7 8.47496C7.32548 8.15029 7.5836 7.7645 7.7595 7.33975C7.93541 6.91501 8.02563 6.45969 8.025 5.99996C8.025 5.03396 7.633 4.15896 7 3.52496L7.707 2.81796C8.12548 3.23537 8.45735 3.73136 8.68354 4.27743C8.90973 4.82351 9.02577 5.4089 9.025 5.99996ZM6 1.99996C5.99987 1.90588 5.97319 1.81374 5.92303 1.73413C5.87288 1.65453 5.80128 1.5907 5.71647 1.54996C5.63166 1.50923 5.53708 1.49325 5.4436 1.50386C5.35011 1.51448 5.26152 1.55125 5.188 1.60996L2.825 3.49996H0.5C0.367392 3.49996 0.240215 3.55264 0.146447 3.64641C0.0526784 3.74017 0 3.86735 0 3.99996V7.99996C0 8.13257 0.0526784 8.25975 0.146447 8.35351C0.240215 8.44728 0.367392 8.49996 0.5 8.49996H2.825L5.188 10.39C5.26152 10.4487 5.35011 10.4854 5.4436 10.4961C5.53708 10.5067 5.63166 10.4907 5.71647 10.45C5.80128 10.4092 5.87288 10.3454 5.92303 10.2658C5.97319 10.1862 5.99987 10.094 6 9.99996V1.99996ZM3.312 4.38996L5 3.03996V8.95996L3.312 7.60996C3.22349 7.53895 3.11347 7.50016 3 7.49996H1V4.49996H3C3.11347 4.49976 3.22349 4.46097 3.312 4.38996Z"
                  fill="white"
                />
              </svg>
            ) : (
              <svg
                width="13"
                height="10"
                viewBox="0 0 13 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.717 0.549997C5.80171 0.590806 5.8732 0.654674 5.92326 0.734271C5.97332 0.813869 5.99991 0.905968 6 0.999997V9C5.99987 9.09408 5.97319 9.18622 5.92303 9.26582C5.87288 9.34542 5.80128 9.40926 5.71647 9.45C5.63166 9.49073 5.53708 9.50671 5.4436 9.49609C5.35011 9.48548 5.26152 9.44871 5.188 9.39L2.825 7.5H0.5C0.367392 7.5 0.240215 7.44732 0.146447 7.35355C0.0526784 7.25978 0 7.13261 0 7V3C0 2.86739 0.0526784 2.74021 0.146447 2.64644C0.240215 2.55268 0.367392 2.5 0.5 2.5H2.825L5.188 0.609997C5.26157 0.551185 5.35026 0.51435 5.44385 0.503735C5.53744 0.49312 5.63212 0.509156 5.717 0.549997ZM5 2.04L3.312 3.39C3.22349 3.461 3.11347 3.49979 3 3.5H1V6.5H3C3.11347 6.5002 3.22349 6.53899 3.312 6.61L5 7.96V2.04ZM12.854 2.646C12.9006 2.69244 12.9375 2.74762 12.9627 2.80836C12.9879 2.86911 13.0009 2.93423 13.0009 3C13.0009 3.06576 12.9879 3.13089 12.9627 3.19163C12.9375 3.25238 12.9006 3.30755 12.854 3.354L11.207 5L12.854 6.646C12.9479 6.73988 13.0006 6.86722 13.0006 7C13.0006 7.13277 12.9479 7.26011 12.854 7.354C12.7601 7.44788 12.6328 7.50063 12.5 7.50063C12.3672 7.50063 12.2399 7.44788 12.146 7.354L10.5 5.707L8.854 7.354C8.76011 7.44788 8.63278 7.50063 8.5 7.50063C8.36722 7.50063 8.23989 7.44788 8.146 7.354C8.05211 7.26011 7.99937 7.13277 7.99937 7C7.99937 6.86722 8.05211 6.73988 8.146 6.646L9.793 5L8.146 3.354C8.09951 3.30751 8.06264 3.25232 8.03748 3.19158C8.01232 3.13084 7.99937 3.06574 7.99937 3C7.99937 2.93425 8.01232 2.86915 8.03748 2.80841C8.06264 2.74767 8.09951 2.69248 8.146 2.646C8.23989 2.55211 8.36722 2.49937 8.5 2.49937C8.56574 2.49937 8.63084 2.51231 8.69158 2.53747C8.75232 2.56263 8.80751 2.59951 8.854 2.646L10.5 4.293L12.146 2.646C12.1924 2.59943 12.2476 2.56249 12.3084 2.53728C12.3691 2.51208 12.4342 2.4991 12.5 2.4991C12.5658 2.4991 12.6309 2.51208 12.6916 2.53728C12.7524 2.56249 12.8076 2.59943 12.854 2.646Z"
                  fill="white"
                />
              </svg>
            )}
          </svg>
        </div>
    </div>
  );
};

export default MusicPlayer;
