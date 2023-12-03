// components/MusicPlayer.tsx

"use client";

import React, { useRef, useState } from "react";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import '../globals.css';

const MusicPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(100);

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

  const handleVolumeChange = (event: Event, value: number | number[]) => {
    const audioElement = audioRef.current;
    if (audioElement) {
      setVolume(value as number);
      audioElement.volume = value as number / 100;
    }
  };

  return (
    <div className="flex items-center justify-center h-full opacity-50">
      <audio ref={audioRef} autoPlay>
        <source
          src="https://bored-bucket.s3.eu-west-3.amazonaws.com/Sleep+Music+-+Deep+Space+-+30+Minutes.mp3"
          type="audio/mp3"
        />
        Your web browser does not support the audio element.
      </audio>

      <div className="hidden fixed bottom-0 justify-between lg:flex gap-2 flex-row m-9 w-1/6">
        <IconButton onClick={handlePlayPause} className="text-white">
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>

        <Slider
          value={volume}
          onChange={handleVolumeChange}
          min={0}
          max={100}
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => `${value}%`}
          className="w-3/5 m-auto"
          sx={{
            color: 'white', // Color of the slider track
            "& .MuiSlider-thumb": {
              backgroundColor: 'black', // Color of the thumb
              border: '2px solid white',
            },
          }}
        />

        <IconButton onClick={handleMuteToggle} className="text-white">
          {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
        </IconButton>
      </div>
    </div>
  );
};

export default MusicPlayer;
