"use client";

import React, { useEffect } from "react";
import Image from "next/image";

const MainComponent: React.FC = () => {
  useEffect(() => {
    const letters = document.querySelectorAll(".rainbow-text");

    letters.forEach((letter, index) => {
      const delay = index * 0.2; // Adjust the delay as needed
      (letter as HTMLElement).style.animationDelay = `${delay}s`;
    });
  }, []);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <figure
        className="scale-75 z-0"
        style={{ width: "200px", height: "200px" }}
      >
        <Image
          src="/assets/cube.gif"
          alt="CubeGif"
          width={500}
          height={500}
          priority
        />
      </figure>
      <div className="flex flex-col">
        <h1 className="uppercase font-extrabold text-3xl pb-10">
          <span className="rainbow-text">S</span>
          <span className="rainbow-text">H</span>
          <span className="rainbow-text">A</span>
          <span className="rainbow-text">M</span>
          <span className="rainbow-text">M</span>
          <span className="rainbow-text">Y</span>
        </h1>
        <p className="flex justify-center items-center">
          <span className="rainbow-text">B</span>
          <span className="rainbow-text">L</span>
          <span className="rainbow-text">O</span>
          <span className="rainbow-text">C</span>
          <span className="rainbow-text">K</span>
          <span className="rainbow-text">C</span>
          <span className="rainbow-text">H</span>
          <span className="rainbow-text">A</span>
          <span className="rainbow-text">I</span>
          <span className="rainbow-text">N</span>
        </p>
        <p className="flex justify-center items-center">
          <span className="rainbow-text">D</span>
          <span className="rainbow-text">E</span>
          <span className="rainbow-text">V</span>
          <span className="rainbow-text">E</span>
          <span className="rainbow-text">L</span>
          <span className="rainbow-text">O</span>
          <span className="rainbow-text">P</span>
          <span className="rainbow-text">E</span>
          <span className="rainbow-text">R</span>
        </p>
        <a
          target="_blank"
          href="https://staky.io/"
          className="flex justify-center items-center text-white hover:underline opacity-50"
        >
          STAKY.IO
        </a>
      </div>
    </div>
  );
};

export default MainComponent;
