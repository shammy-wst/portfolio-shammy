import React from "react";
import Button from "@mui/material/Button";
import "./informationbox.content.css";
import "./CustomButton";
import CustomButton from "./CustomButton";

interface InformationBoxProps {
  title: string;
  projectTitle: string;
  description: string;
  date: string;
}

const InformationBox: React.FC<InformationBoxProps> = ({
  title,
  projectTitle,
  description,
  date,
}) => {
  return (
    <div className="flex flex-col m-auto sm:justify-center md:justify-between w-full">
      <div className="z-20 border-white border-2 p-0 mt-10 flex flex-col gap-4 max-w-full">
        <div>
          <div
            id="Projects"
            className="flex bg-white text-black border-b-2 border-black m-0"
          >
            <h1 className="uppercase border-2 w-full py-2 px-4 border-black font-black text-2xl">
              {(title = "Projects")}
            </h1>
          </div>
          <div className="flex flex-col gap-2 p-4 m-0 text-lg">
            <a
              target="blank"
              href="https://github.com/shammy-wst/FlixHive-WEB"
              className="shake-element font-bold cursor-pointer uppercase text-2xl max-w-[20%]"
              id="shake-element"
            >
              {(projectTitle = "FlixHive")}
            </a>
            <div className="flex justify-between p-0 gap-2">
              <p className="flex w-4/5">
                {
                  (description =
                    "Discover the new face of our Netflix clone: a sleek design that blends seamlessly with the latest trends, using NextJS, Firebase and TailwindCSS.")
                }
              </p>
              <p className="flex">{(date = "2023")}</p>
            </div>
            <div className="flex flex-col gap-2 md:flex-row">
              <CustomButton text="FULLSTACK" />
              <CustomButton text="NEXTJS" />
              <CustomButton text="FIREBASE" />
              <CustomButton text="TAILWINDCSS" />
              <CustomButton text="FIGMA" />
            </div>
          </div>
        </div>
        <div>
          <div className="flex border-b-2 border-white py-2 px-4 m-0"></div>
          <div className="flex flex-col gap-2 p-4 m-0 text-lg">
            <a
              target="blank"
              href="https://www.figma.com/proto/XslO2zvD0dxSqLCB3T1Tfh/Untitled?page-id=0%3A1&node-id=1-4464&mode=design&t=rnCHmyiSX7BAetVn-1"
              className="shake-element font-bold cursor-pointer uppercase text-2xl max-w-[20%]"
            >
              {(projectTitle = "Greenly")}
            </a>
            <div className="flex justify-between p-0 gap-2">
              <p className="flex w-4/5">
                {
                  (description =
                    "I've overhauled Greenly's product page completely using Figma. The redesigned prototype is a sleek and user-friendly upgrade, promising a more engaging and efficient browsing experience for our customers. This revamp underscores our commitment to cutting-edge design and technology in e-commerce.")
                }
              </p>
              <p className="flex">{(date = "2023")}</p>
            </div>
            <div className="flex flex-row gap-2">
              <CustomButton text="FIGMA" />
              <CustomButton text="PROTOYYPING" />
              <CustomButton text="UI & UX DESIGN" />
            </div>
          </div>
        </div>
        <div>
          <div className="flex border-b-2 border-white py-2 px-4 m-0"></div>
          <div className="flex flex-col gap-2 p-4 m-0 text-lg">
            <a
              target="blank"
              href="https://github.com/shammy-wst/subskill-project"
              className="shake-element font-bold cursor-pointer uppercase text-2xl max-w-[20%]"
            >
              {(projectTitle = "Subskill")}
            </a>
            <div className="flex justify-between p-0 gap-2">
              <p className="flex w-4/5">
                {
                  (description =
                    "I've been working on a new project to help companies comply with the GDPR. I've completely redesigned and integrated Mission RGPD's website using native HTML and CSS, resulting in a polished and efficient user experience.")
                }
              </p>
              <p className="flex">{(date = "2023")}</p>
            </div>
            <div className="flex flex-row gap-2">
              <CustomButton text="native" />
              <CustomButton text="html/css" />
              <CustomButton text="figma" />
            </div>
          </div>
        </div>
        <div>
          <div className="flex border-b-2 border-white py-2 px-4 m-0"></div>
          <div className="flex flex-col gap-2 p-4 m-0 text-lg">
            <a
              target="blank"
              href="https://www.figma.com/proto/MXSxPr8SrU8JK0FZInK1Xf/Dashblade---APP?page-id=0%3A1&type=design&node-id=36-4877&viewport=928%2C386%2C0.1&t=QqUm4hP69RSOVjuS-1&scaling=scale-down&starting-point-node-id=36%3A4877&mode=design"
              className="shake-element font-bold cursor-pointer uppercase text-2xl max-w-[20%]"
            >
              {(projectTitle = "Dashblade")}
            </a>
            <div className="flex justify-between p-0 gap-2">
              <p className="flex w-4/5">
                {
                  (description =
                    "I've meticulously crafted Dashblade, a cryptocurrency mobile app, from scratch using Figma. Through a comprehensive prototyping process, I've focused on reliability and speed to ensure a seamless user experience.")
                }
              </p>
              <p className="flex">{(date = "2022")}</p>
            </div>
            <div className="flex flex-row gap-2">
              <CustomButton text="MOBILE" />
              <CustomButton text="FIGMA" />
              <CustomButton text="UI & UX DESIGN" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationBox;
