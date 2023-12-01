"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface ProjectData {
  title: string;
  description: string;
  stacks: string[];
  photo: string;
  link: string;
}

const projects: ProjectData[] = [
  {
    title: "BORED =)",
    description:
      "Welcome to BORED - your go-to hub for smashing boredom with just one click! Our cutting-edge site streamlines your quest for exciting activities by bringing together a wide range of entertaining options.",
    stacks: [
      "NextJS",
      "NodeJS",
      "MongoDB",
      "TailwindCSS",
      "Typescript",
      "Google API",
    ],
    photo: "https://bored-bucket.s3.eu-west-3.amazonaws.com/boredscreen.png",
    link: "https://bored-app-inky.vercel.app/",
  },
  {
    title: "FlixHive",
    description: "Watch film and series, easily !",
    stacks: ["NextJS", "Firebase", "TailwindCSS", "Typescript", "MovieDB API"],
    photo: "https://bored-bucket.s3.eu-west-3.amazonaws.com/flix.png",
    link: "https://flix-hive-web.vercel.app/",
  },
  {
    title: "MISSION RGPD",
    description:
      "The main goal of this project was to faithfully replicate the Figma template using HTML and CSS, ensuring a smooth integration of design and development. Every effort was made to closely match the layout, typography, colors, and visual elements.",
    stacks: ["HTML", "CSS", "Javascript"],
    photo: "https://bored-bucket.s3.eu-west-3.amazonaws.com/portfoliosubskill",
    link: "https://project-subskill.netlify.app/",
  },
  {
    title: "Pokedex",
    description: "A web app combining Next.js, TypeScript, and Tailwind CSS for a responsive and visually appealing Pokémon experience. Features dynamic routing, TypeScript for enhanced code quality, and Tailwind CSS for streamlined styling. Utilizes the Pokémon API for up-to-date Pokémon information, with search and filtering options for user convenience.",
    stacks: ["NextJS", "Typescript", "PokeAPI", "TailwindCSS"],
    photo: "https://bored-bucket.s3.eu-west-3.amazonaws.com/pokedex.png",
    link: "https://youtu.be/dQw4w9WgXcQ",
  },
];

interface ModalProjectProps {
  onClose: () => void;
}

const ModalProject: React.FC<ModalProjectProps> = ({ onClose }) => {
  // Utilisez useState pour gérer l'index du projet actuel
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Obtenez les données du projet actuel
  const currentProject = projects[currentProjectIndex];

  // Fonction pour passer au projet suivant
  const goToNextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  // Fonction pour revenir au projet précédent
  const goToPreviousProject = () => {
    setCurrentProjectIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-[#1B1B1B]">
        <div className="flex flex-col w-4/6 h-4/6 py-2 px-4 border-white border-4 justify-center gap-4">
          <nav className="flex flex-row-reverse justify-between w-full pb-4 border-4 p-4">
            <figure className="items-center h-full" onClick={onClose}>
              <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="items-center cursor-pointer"
              >
                <path
                  d="M16.778 14.42L11.276 8.91696L16.776 3.41496L13.949 0.584961L8.44597 6.08696L2.94397 0.584961L0.115967 3.41496L5.61597 8.91696L0.115967 14.419L2.94597 17.247L8.44597 11.745L13.946 17.247L16.778 14.42Z"
                  fill="#F8F8F8"
                />
              </svg>
            </figure>
            <h1 className="uppercase font-bold border-4 py-2 px-4">
                {currentProject.title}
              </h1>
            <div className="flex flex-row gap-4 justify-between items-center">
              <svg
                width="8"
                height="15"
                viewBox="0 0 8 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={goToPreviousProject}
                className="cursor-pointer"
              >
                <path d="M0 7.5L8 0V15L0 7.5Z" fill="#F8F8F8" />
              </svg>
              <svg
                width="8"
                height="15"
                viewBox="0 0 8 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={goToNextProject}
                className="cursor-pointer"
              >
                <path d="M8 7.5L0 0V15L8 7.5Z" fill="#F8F8F8" />
              </svg>
            </div>
          </nav>
          <main className="flex flex-col border-4 p-4 h-5/6">
            <div className="flex flex-row text-left w-full h-full text-xl justify-between">
              <div className="border-4 border-white w-full h-3/12 p-4">
                <p>{currentProject.description}</p>
              </div>
              <nav className="flex w-full justify-center">
                <ul className="flex flex-col items-center text-center gap-3 uppercase">
                  <li className="font-bold text-2xl uppercase border-4 border-white p-4">
                    Stacks Used :
                  </li>
                  {currentProject.stacks.map((stack, index) => (
                    <li
                      key={index}
                      className="font-bold underline border-4 border-white p-2  cursor-pointer"
                    >
                      {stack}
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="gap-2 flex flex-col">
              <div className="flex-col flex border-4 border-white w-fit h-fit object-cover object-center items-center justify-center align-middle">
                <Image
                  src={currentProject.photo}
                  alt="ProjectImg"
                  width={800} // Remplacez la valeur par la largeur souhaitée de l'image
                  height={600} // Remplacez la valeur par la hauteur souhaitée de l'image
                  className="w-fit h-fit object-cover object-center"
                />
              </div>
              <div className="flex flex-col gap-2 font-bold text-center">
              <button className="border-4 flex uppercase justify-center items-center">Website</button>
              <button className="border-4 flex uppercase justify-center items-center">Demo</button>
              <button className="border-4 flex uppercase justify-center items-center">Github</button>
              <button className="border-4 flex uppercase justify-center items-center">Developpers</button>
              </div>
              <div className="flex-col flex border-4 border-white w-fit h-fit object-cover object-center items-center justify-center align-middle">
                <Image
                  src={currentProject.photo}
                  alt="ProjectImg"
                  width={800} // Remplacez la valeur par la largeur souhaitée de l'image
                  height={600} // Remplacez la valeur par la hauteur souhaitée de l'image
                  className="w-fit h-fit object-cover object-center"
                />
              </div>
            </div>
              </div>
              
          </main>
        </div>
      </div>
  );
};

export default ModalProject;
