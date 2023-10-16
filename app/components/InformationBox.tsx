import React from "react";
import Button from "@mui/material/Button";
import "./informationbox.content.css"

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
    <div className="flex flex-col m-auto sm:justify-center md:justify-between w-full">
      <div className="z-20 border-white border-2 p-0 mt-10 flex flex-col gap-4 max-w-full">
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
            className="shake-element font-bold cursor-pointer uppercase text-2xl max-w-[20%]"
            id="shake-element"
          >
            {projectTitle}
          </a>
          <div className="flex justify-between p-0 gap-2">
            <p className="flex w-4/5">{description}</p>
            <p className="flex">{date}</p>
          </div>
          <div className="flex flex-row gap-2">
          <Button 
          variant="outlined"
          className="
          bg-white
          text-black
          hover:bg-black
          hover:text-white
          border-2
          border-black
          hover:border-white
          uppercase
          text-base
          font-bold
          py-2
          px-4
          rounded-none
          cursor-pointer
          max-w-max
          ">FIGMA</Button>
          <Button 
          variant="outlined"
          className="
          bg-white
          text-black
          hover:bg-black
          hover:text-white
          border-2
          border-black
          hover:border-white
          uppercase
          text-base
          font-bold
          py-2
          px-4
          rounded-none
          cursor-pointer
          max-w-max
          ">NEXTJS</Button>
          <Button 
          variant="outlined"
          className="
          bg-white
          text-black
          hover:bg-black
          hover:text-white
          border-2
          border-black
          hover:border-white
          uppercase
          text-base
          font-bold
          py-2
          px-4
          rounded-none
          cursor-pointer
          max-w-max
          ">TAILWINDCSS</Button>
          <Button 
          variant="outlined"
          className="
          bg-white
          text-black
          hover:bg-black
          hover:text-white
          border-2
          border-black
          hover:border-white
          uppercase
          text-base
          font-bold
          py-2
          px-4
          rounded-none
          cursor-pointer
          max-w-max
          ">FIREBASE</Button>
          </div>
          
        </div>
      </div>
      <div id="Project2">
        <div className="flex border-b-2 border-white py-2 px-4 m-0"></div>
        <div className="flex flex-col gap-2 p-4 m-0 text-lg">
          <a
            target="blank"
            href="https://www.figma.com/proto/XslO2zvD0dxSqLCB3T1Tfh/Untitled?page-id=0%3A1&node-id=1-4464&mode=design&t=rnCHmyiSX7BAetVn-1"
            className="shake-element font-bold cursor-pointer uppercase text-2xl max-w-[20%]"
          >
            {projectTitle2}
          </a>
          <div className="flex justify-between p-0 gap-2">
            <p className="flex w-4/5">{description2}</p>
            <p className="flex">{date2}</p>
          </div>
          <div className="flex flex-row gap-2">
          <Button 
          variant="outlined"
          className="
          bg-white
          text-black
          hover:bg-black
          hover:text-white
          border-2
          border-black
          hover:border-white
          uppercase
          text-base
          font-bold
          py-2
          px-4
          rounded-none
          cursor-pointer
          max-w-max
          ">FIGMA</Button>
          <Button 
          variant="outlined"
          className="
          bg-white
          text-black
          hover:bg-black
          hover:text-white
          border-2
          border-black
          hover:border-white
          uppercase
          text-base
          font-bold
          py-2
          px-4
          rounded-none
          cursor-pointer
          max-w-max
          ">PROTOTYPING</Button>
          <Button 
          variant="outlined"
          className="
          bg-white
          text-black
          hover:bg-black
          hover:text-white
          border-2
          border-black
          hover:border-white
          uppercase
          text-base
          font-bold
          py-2
          px-4
          rounded-none
          cursor-pointer
          max-w-max
          ">UI/UX DESIGN</Button>
          </div>
        </div>
      </div>
      <div id="Project3">
        <div className="flex border-b-2 border-white py-2 px-4 m-0"></div>
        <div className="flex flex-col gap-2 p-4 m-0 text-lg">
          <a
            target="blank"
            href="https://project-subskill.netlify.app/"
            className="shake-element font-bold cursor-pointer uppercase text-2xl max-w-[20%]"
          >
            {projectTitle3}
          </a>
          <div className="flex justify-between p-0 gap-2">
            <p className="flex w-4/5">{description3}</p>
            <p className="flex">{date3}</p>
          </div>
          <div className="flex flex-row gap-2">
          <Button 
          variant="outlined"
          className="
          bg-white
          text-black
          hover:bg-black
          hover:text-white
          border-2
          border-black
          hover:border-white
          uppercase
          text-base
          font-bold
          py-2
          px-4
          rounded-none
          cursor-pointer
          max-w-max
          ">WEB INTEGRATION</Button>
          <Button 
          variant="outlined"
          className="
          bg-white
          text-black
          hover:bg-black
          hover:text-white
          border-2
          border-black
          hover:border-white
          uppercase
          text-base
          font-bold
          py-2
          px-4
          rounded-none
          cursor-pointer
          max-w-max
          ">HTML/CSS NATIVE</Button>
          <Button 
          variant="outlined"
          className="
          bg-white
          text-black
          hover:bg-black
          hover:text-white
          border-2
          border-black
          hover:border-white
          uppercase
          text-base
          font-bold
          py-2
          px-4
          rounded-none
          cursor-pointer
          max-w-max
          ">RESPONSIVE CODE</Button>
          <Button 
          variant="outlined"
          className="
          bg-white
          text-black
          hover:bg-black
          hover:text-white
          border-2
          border-black
          hover:border-white
          uppercase
          text-base
          font-bold
          py-2
          px-4
          rounded-none
          cursor-pointer
          max-w-max
          ">FIGMA</Button>
          </div>
        </div>
        
      </div>
      <div id="Project4">
        <div className="flex border-b-2 border-white py-2 px-4 m-0"></div>
        <div className="flex flex-col gap-2 p-4 m-0 text-lg">
          <a
            target="blank"
            href="https://www.figma.com/proto/MXSxPr8SrU8JK0FZInK1Xf/Dashblade---APP?page-id=0%3A1&type=design&node-id=36-4877&viewport=928%2C386%2C0.1&t=QqUm4hP69RSOVjuS-1&scaling=scale-down&starting-point-node-id=36%3A4877&mode=design"
            className="shake-element font-bold cursor-pointer uppercase text-2xl max-w-[20%]"
          >
            {projectTitle4}
          </a>
          <div className="flex justify-between p-0 gap-2">
            <p className="flex w-4/5">{description4}</p>
            <p className="flex">{date4}</p>
          </div>
          <div className="flex flex-row gap-2">
          <Button 
          variant="outlined"
          className="
          bg-white
          text-black
          hover:bg-black
          hover:text-white
          border-2
          border-black
          hover:border-white
          uppercase
          text-base
          font-bold
          py-2
          px-4
          rounded-none
          cursor-pointer
          max-w-max
          ">FIGMA</Button>
          <Button 
          variant="outlined"
          className="
          bg-white
          text-black
          hover:bg-black
          hover:text-white
          border-2
          border-black
          hover:border-white
          uppercase
          text-base
          font-bold
          py-2
          px-4
          rounded-none
          cursor-pointer
          max-w-max
          ">MOBILE</Button>
          <Button 
          variant="outlined"
          className="
          bg-white
          text-black
          hover:bg-black
          hover:text-white
          border-2
          border-black
          hover:border-white
          uppercase
          text-base
          font-bold
          py-2
          px-4
          rounded-none
          cursor-pointer
          max-w-max
          ">CRYPTOCURRENCY</Button>
          <Button 
          variant="outlined"
          className="
          bg-white
          text-black
          hover:bg-black
          hover:text-white
          border-2
          border-black
          hover:border-white
          uppercase
          text-base
          font-bold
          py-2
          px-4
          rounded-none
          cursor-pointer
          max-w-max
          ">PROTOTYPING</Button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default InformationBox;
