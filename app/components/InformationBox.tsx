import { Content } from "next/font/google";
import React from "react";

interface InformationBoxProps {
  title: string;
  projectTitle: string;
  projectTitle2: string;
  projectTitle3: string;
  projectTitle4: string;
  description: string;
  description2: string;
  description3: string;
  description4: string;
  date: string;
  date2: string;
  date3: string;
  date4: string;
}

const InformationBox: React.FC<InformationBoxProps> = ({
  title,
  projectTitle,
  projectTitle2,
  projectTitle3,
  projectTitle4,
  description,
  description2,
  description3,
  description4,
  date,
  date2,
  date3,
  date4,
}) => {
  return (
    <div className="z-20 border-white border-2 p-0 mt-10 flex flex-col gap-4">
      <div id="Project1">
        <div className="flex bg-white text-black border-b-2 border-black m-0">
          <h1 className="uppercase border-2 w-full py-2 px-4 border-black font-black text-2xl">
            {title}
          </h1>
        </div>
        <div className="flex flex-col gap-2 p-4 m-0 text-lg">
          <a
            target="blank"
            href="https://flix-hive-web.vercel.app/"
            className="font-bold hover:underline cursor-pointer animate-pulse uppercase text-2xl"
          >
            {projectTitle}
          </a>
          <div className="flex justify-between p-0 gap-2">
            <p className="flex w-4/5">{description}</p>
            <p className="flex">{date}</p>
          </div>
        </div>
      </div>
      <div id="Project2">
        <div className="flex border-b-2 border-white py-2 px-4 m-0"></div>
        <div className="flex flex-col gap-2 p-4 m-0 text-lg">
          <a
            target="blank"
            href="https://www.figma.com/proto/MXSxPr8SrU8JK0FZInK1Xf/Dashblade---APP?page-id=0%3A1&type=design&node-id=36-4877&viewport=928%2C386%2C0.1&t=QqUm4hP69RSOVjuS-1&scaling=scale-down&starting-point-node-id=36%3A4877&mode=design"
            className="font-bold hover:underline cursor-pointer animate-pulse uppercase text-2xl"
          >
            {projectTitle2}
          </a>
          <div className="flex justify-between p-0 gap-2">
            <p className="flex w-4/5">{description2}</p>
            <p className="flex">{date2}</p>
          </div>
        </div>
      </div>
      <div id="Project3">
        <div className="flex border-b-2 border-white py-2 px-4 m-0"></div>
        <div className="flex flex-col gap-2 p-4 m-0 text-lg">
          <a
            target="blank"
            href="https://project-subskill.netlify.app/"
            className="font-bold hover:underline cursor-pointer animate-pulse uppercase text-2xl"
          >
            {projectTitle3}
          </a>
          <div className="flex justify-between p-0 gap-2">
            <p className="flex w-4/5">{description3}</p>
            <p className="flex">{date3}</p>
          </div>
        </div>
      </div>
      <div id="Project4">
        <div className="flex border-b-2 border-white py-2 px-4 m-0"></div>
        <div className="flex flex-col gap-2 p-4 m-0 text-lg">
          <a
            target="blank"
            href="#"
            className="font-bold hover:underline cursor-pointer animate-pulse uppercase text-2xl"
          >
            {projectTitle4}
          </a>
          <div className="flex justify-between p-0 gap-2">
            <p className="flex w-4/5">{description4}</p>
            <p className="flex">{date4}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationBox;
