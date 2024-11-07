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
    <div className="flex flex-col w-screen h-full justify-center items-center fixed">
      <div className="bg-black fixed w-screen h-full z-10 opacity-90"></div>
      <figure className="w-full h-full">
        <Image
          src="/assets/contactme.gif"
          alt="bgcontactme"
          layout="fill"
          objectFit="cover"
          priority
        />
      </figure>
      <div className="fixed flex z-10 scale-90 h-full m-auto items-center">
        <div className="flex justify-center flex-col gap-6 m-auto h-full w-screen">
          <h1 className="flex text-4xl text-center justify-center uppercase rainbow-text w-screen">
            CONTACT
          </h1>
          <div className="flex lg:flex-row flex-col justify-between lg:gap-20 items-center w-screen">
            <figure>
              <a target="_blank" href="https://discord.gg/WmpGbSBeF6">
                <Image
                  src="/assets/discord.png"
                  alt="bgcontactme"
                  width={150}
                  height={150}
                  priority
                  className="hover:scale-110 border-2 rounded-lg"
                />
              </a>
            </figure>
            <figure>
              <Image
                src="/assets/mail.png"
                alt="bgcontactme"
                width={150}
                height={150}
                priority
                className="hover:scale-110 border-2 rounded-lg"
                onClick={openMailHover}
              />
            </figure>
            <figure>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/aichammmadi/"
              >
                <Image
                  src="/assets/linkedin.png"
                  alt="bgcontactme"
                  width={150}
                  height={150}
                  priority
                  className="hover:scale-110 border-2 rounded-lg"
                />
              </a>
            </figure>
          </div>
        </div>
        {isMailHoverVisible && <MailHover onClose={closeMailHover} />}
      </div>
    </div>
  );
};

export default ContactMe;
