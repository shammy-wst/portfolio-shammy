"use client";

import React, { useState } from "react";
import Image from "next/image";

// Interface pour définir le type des mappings entre les liens et les GIF
interface GifMappings {
  [key: string]: string;
}

// Objet associant chaque lien avec son GIF correspondant
const gifMappings: GifMappings = {
  "https://www.linkedin.com/in/aichammmadi/": "/assets/linkedin.gif",
  "https://staky.io/": "/assets/staky.gif",
  "https://www.afc-templiers.net/": "/assets/football.gif",
  // Ajoutez d'autres mappings au besoin
};

const AboutMe: React.FC = () => {
  // State pour suivre le lien survolé et la position de la souris
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  // Gestionnaire d'événement pour suivre la position de la souris
  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  // Gestionnaire d'événement pour arrêter de suivre la position de la souris
  const handleMouseLeave = () => {
    setMousePosition(null);
  };

  return (
    <div
      className="flex  flex-col w-full h-screen justify-center items-center relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bg-black fixed w-full h-full z-10 opacity-90"></div>
      <div className="fixed w-full h-full">
        <Image
          src="/assets/bgaboutme.gif"
          alt="CubeGif"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="flex z-10 flex-col border-2 rounded-lg border-white w-4/5 gap-6 p-2 justify-center">
        <div className="flex flex-col">
          <h1 className="text-2xl text-center uppercase rainbow-text pb-4">
            About Me
          </h1>
          <p className="text-center text-lg text-white tracking-wide">
            I&apos;m{" "}
            <span
              className={`hover:underline rainbow-text ${
                hoveredLink === "https://www.linkedin.com/in/aichammmadi/" &&
                "hovered"
              }`}
              onMouseEnter={() =>
                setHoveredLink("https://www.linkedin.com/in/aichammmadi/")
              }
              onMouseLeave={() => setHoveredLink(null)}
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/aichammmadi/"
              >
                Icham
              </a>
            </span>{" "}
            a 20 years old student in computer science, I&apos;m passionate
            about web development especially in creative things. I&apos;m
            currently looking for an{" "}
            <span
              className={`hover:underline rainbow-text ${
                hoveredLink === "https://www.linkedin.com/in/aichammmadi/" &&
                "hovered"
              }`}
              onMouseEnter={() =>
                setHoveredLink("https://www.linkedin.com/in/aichammmadi/")
              }
              onMouseLeave={() => setHoveredLink(null)}
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/aichammmadi/"
              >
                Internship
              </a>
            </span>{" "}
            as a Junior Creative Web Developer.
          </p>
          <p className="text-center text-lg text-white tracking-wide">
            When I&apos;m not coding, I&apos;m on the football fields, I&apos;m
            currently playing for{" "}
            <span
              className={`hover:underline rainbow-text ${
                hoveredLink === "https://www.afc-templiers.net/" && "hovered"
              }`}
              onMouseEnter={() =>
                setHoveredLink("https://www.afc-templiers.net/")
              }
              onMouseLeave={() => setHoveredLink(null)}
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.afc-templiers.net/"
              >
                Les Templiers d&apos;Elancourt
              </a>
            </span>{" "}
            in the French National League.
          </p>
        </div>
        {/* Affiche le GIF correspondant au lien survolé à la position de la souris */}
        {hoveredLink && mousePosition && (
          <div
            className="fixed z-30"
            style={{ top: mousePosition.y, left: mousePosition.x }}
          >
            <Image
              src={gifMappings[hoveredLink]}
              alt="GIF"
              width={200}
              height={200}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutMe;
