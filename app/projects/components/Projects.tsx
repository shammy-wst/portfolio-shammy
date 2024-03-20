"use client";

import React, { useState } from "react";
import Image from "next/image";

// Interface représentant la structure d'un projet
interface Project {
  title: string;
  image: string;
  stacks: string[];
  githubLink: string;
  prodLink: string;
}

// Tableau de projets
const projects: Project[] = [
  {
    title: "BORED",
    image: "/assets/BORED.png",
    stacks: ["NextJS", "TypeScript", "NodeJS", "Google API"],
    githubLink: "https://github.com/boredproject/bored_app",
    prodLink: "https://bored-app-inky.vercel.app/",
  },
  {
    title: "FLIXHIVE",
    image: "/assets/FLIXHIVE.png",
    stacks: ["Next.js", "TypeScript", "TMDB API"],
    githubLink: "https://github.com/shammy-wst/FlixHive-WEB",
    prodLink: "https://flix-hive-web.vercel.app/",
  },
  {
    title: "HEXABOT",
    image: "/assets/HEXABOT.png",
    stacks: ["NestJS", "TypeScript", "Discord API"],
    githubLink: "https://github.com/shammy-wst/hexa-bot",
    prodLink: "https://discord.gg/WmpGbSBeF6",
  },
  {
    title: "MISSION RGPD",
    image: "/assets/RGPD.png",
    stacks: ["HTML", "CSS", "JS"],
    githubLink: "https://github.com/shammy-wst/subskill-project",
    prodLink: "https://project-subskill.netlify.app/",
  },
  {
    title: "DESIGN",
    image: "/assets/DRIBBLE.png",
    stacks: ["Figma", "UI/UX", "Prototyping"],
    githubLink: "lien_github_5",
    prodLink: "lien_production_5",
  },
];

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const goToNextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const goToPreviousProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const { title, image, stacks, githubLink, prodLink } =
    projects[currentProject];

  return (
    <div>
      <div className="fixed w-full h-full bg-black z-0">
        <div className="bg-black">
          <Image
            src="/assets/3drings.gif"
            alt="CubeGif"
            layout="fill"
            priority
            className="opacity-10"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center h-screen w-full gap-6">
        <h1 className="text-4xl text-center uppercase rainbow-text z-0">
          Projects
        </h1>
        <div className="border-2 border-white w-4/5 lg:h-2/5 h-2/3 flex mx-auto flex-col bg-black z-0">
          {/* Contenu du carrousel */}
          <figure className="relative w-full h-full scale-75">
            <Image
              src={image}
              alt={title}
              layout="fill"
              className="border-2 object-contain"
            />
          </figure>
          <div className="flex flex-col justify-center p-4 w-4/5 mb-4 mx-auto text-center gap-8">
            <div>
              <h2 className="text-4xl font-bold">{title}</h2>
              <p>Stacks: {stacks.join(", ")}</p>
            </div>
            <div className="flex justify-between">
              <a href={prodLink} target="_blank" rel="noopener noreferrer">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 110 107"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M54.9999 0.833328C47.8867 0.833328 40.843 2.23439 34.2712 4.95652C27.6994 7.67865 21.7281 11.6685 16.6983 16.6984C6.54008 26.8566 0.833252 40.6341 0.833252 55C0.833252 78.9417 16.3791 99.2542 37.8833 106.458C40.5916 106.892 41.4583 105.212 41.4583 103.75V94.5958C26.4541 97.8458 23.2583 87.3375 23.2583 87.3375C20.7666 81.0542 17.2458 79.375 17.2458 79.375C12.3166 76.0167 17.6249 76.125 17.6249 76.125C23.0416 76.5042 25.9124 81.7042 25.9124 81.7042C30.6249 89.9375 38.5874 87.5 41.6749 86.2C42.1624 82.6792 43.5708 80.2958 45.0874 78.9417C33.0624 77.5875 20.4416 72.9292 20.4416 52.2917C20.4416 46.2792 22.4999 41.4583 26.0208 37.6125C25.4791 36.2583 23.5833 30.625 26.5624 23.3125C26.5624 23.3125 31.1124 21.85 41.4583 28.8375C45.7374 27.6458 50.3958 27.05 54.9999 27.05C59.6041 27.05 64.2624 27.6458 68.5416 28.8375C78.8874 21.85 83.4374 23.3125 83.4374 23.3125C86.4166 30.625 84.5208 36.2583 83.9791 37.6125C87.4999 41.4583 89.5582 46.2792 89.5582 52.2917C89.5582 72.9833 76.8833 77.5333 64.8041 78.8875C66.7541 80.5667 68.5416 83.8708 68.5416 88.9083V103.75C68.5416 105.212 69.4082 106.946 72.1707 106.458C93.6749 99.2 109.167 78.9417 109.167 55C109.167 47.8867 107.766 40.8431 105.043 34.2713C102.321 27.6995 98.3314 21.7282 93.3015 16.6984C88.2717 11.6685 82.3004 7.67865 75.7286 4.95652C69.1568 2.23439 62.1132 0.833328 54.9999 0.833328Z"
                    fill="white"
                  />
                </svg>
              </a>

              <a href={prodLink} target="_blank" rel="noopener noreferrer">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 190 190"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M103.13 154.77C103.688 155.327 104.13 155.989 104.432 156.717C104.734 157.446 104.89 158.227 104.89 159.015C104.89 159.803 104.734 160.584 104.432 161.313C104.13 162.041 103.688 162.703 103.13 163.26L93.18 173.2C83.0514 183.329 69.314 189.019 54.99 189.019C40.666 189.019 26.9286 183.329 16.8 173.2C6.6714 163.071 0.981201 149.334 0.981201 135.01C0.981201 120.686 6.6714 106.949 16.8 96.82L40.91 72.7C50.6485 62.9505 63.7458 57.2928 77.5199 56.8857C91.294 56.4786 104.703 61.3527 115 70.51C115.591 71.0353 116.073 71.6718 116.418 72.3833C116.763 73.0947 116.964 73.8672 117.01 74.6564C117.057 75.4457 116.947 76.2365 116.688 76.9834C116.429 77.7304 116.025 78.4191 115.5 79.01C114.975 79.601 114.338 80.0827 113.627 80.4276C112.915 80.7725 112.143 80.974 111.354 81.0204C110.564 81.0668 109.774 80.9573 109.027 80.6982C108.28 80.439 107.591 80.0353 107 79.51C98.9916 72.396 88.5676 68.6108 77.8605 68.9287C67.1534 69.2465 56.9723 73.6435 49.4 81.22L25.28 105.3C17.4004 113.18 12.9737 123.867 12.9737 135.01C12.9737 146.153 17.4004 156.84 25.28 164.72C33.1596 172.6 43.8466 177.026 54.99 177.026C66.1334 177.026 76.8204 172.6 84.7 164.72L94.64 154.77C95.1973 154.212 95.859 153.77 96.5874 153.468C97.3158 153.166 98.0965 153.01 98.885 153.01C99.6735 153.01 100.454 153.166 101.183 153.468C101.911 153.77 102.573 154.212 103.13 154.77ZM173.2 16.77C163.065 6.65391 149.33 0.972351 135.01 0.972351C120.69 0.972351 106.955 6.65391 96.82 16.77L86.87 26.71C85.7442 27.8358 85.1117 29.3628 85.1117 30.955C85.1117 32.5472 85.7442 34.0742 86.87 35.2C87.9959 36.3258 89.5228 36.9583 91.115 36.9583C92.7072 36.9583 94.2342 36.3258 95.36 35.2L105.3 25.2C113.18 17.3204 123.867 12.8937 135.01 12.8937C146.153 12.8937 156.84 17.3204 164.72 25.2C172.6 33.0796 177.026 43.7666 177.026 54.91C177.026 66.0534 172.6 76.7404 164.72 84.62L140.6 108.81C133.028 116.387 122.847 120.783 112.14 121.101C101.432 121.419 91.0084 117.634 83 110.52C81.8065 109.459 80.2405 108.916 78.6465 109.01C77.0524 109.103 75.5609 109.827 74.5 111.02C73.4391 112.213 72.8958 113.779 72.9896 115.374C73.0834 116.968 73.8065 118.459 75 119.52C85.2962 128.671 98.7006 133.542 112.47 133.135C126.239 132.728 139.332 127.074 149.07 117.33L173.18 93.21C178.202 88.1962 182.187 82.2416 184.906 75.6869C187.625 69.1321 189.026 62.1056 189.027 55.0091C189.029 47.9127 187.632 40.8855 184.917 34.3293C182.201 27.7731 178.219 21.8165 173.2 16.8V16.77Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex justify-center w-4/5 mx-auto mb-4">
            <div className="justify-center flex gap-8 text-4xl z-10 text-white">
              <button
                onClick={goToPreviousProject}
                className="btn btn-secondary hover:scale-110 color-white"
              >
                &lt;
              </button>
              <button
                onClick={goToNextProject}
                className="btn btn-primary hover:scale-110 color-white"
              >
                &gt;
              </button>
            </div>
          </div>
          {/* Fin du contenu du carrousel */}
        </div>
        {/* Boutons de navigation du carrousel */}
      </div>
    </div>
  );
};

export default Projects;
