"use client";
import React, { useState } from "react";
import Image from "next/image";
import MailHover from "./MailHover";

const ContactMe: React.FC = () => {
  const [isMailHoverVisible, setIsMailHoverVisible] = useState(false);

  const openMailHover = () => {
    setIsMailHoverVisible(true);
  };

  const closeMailHover = () => {
    setIsMailHoverVisible(false);
  };
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      <div className="bg-black fixed w-full h-full z-10 opacity-90"></div>
      <figure className="w-full h-screen overflow-hidden">
        <Image
          src="/assets/contactme.gif"
          alt="bgcontactme"
          layout="fill"
          objectFit="cover"
          priority
        />
      </figure>
      <div className="flex fixed z-10 flex-col border-2 w-4/5 gap-6 p-4">
        <h1 className="text-4xl text-center uppercase rainbow-text">CONTACT</h1>
        <div className="flex flex-col lg:flex-row justify-evenly p-2">
          <figure className="flex justify-center">
            <a target="_blank" href="https://discord.gg/WmpGbSBeF6">
              <Image
                src="/assets/discord.png"
                alt="bgcontactme"
                width={150}
                height={150}
                priority
                className="hover:scale-110 border-2"
              />
            </a>
          </figure>
          <figure className="flex justify-center">
            <Image
              src="/assets/mail.png"
              alt="bgcontactme"
              width={150}
              height={150}
              priority
              className="hover:scale-110 border-2"
              onClick={openMailHover}
            />
          </figure>
          <figure className="flex justify-center">
            <a target="_blank" href="https://www.linkedin.com/in/aichammmadi/">
              <Image
                src="/assets/linkedin.png"
                alt="bgcontactme"
                width={150}
                height={150}
                priority
                className="hover:scale-110 border-2"
              />
            </a>
          </figure>
        </div>
        {isMailHoverVisible && <MailHover onClose={closeMailHover} />}
      </div>
    </div>
  );
};

export default ContactMe;
