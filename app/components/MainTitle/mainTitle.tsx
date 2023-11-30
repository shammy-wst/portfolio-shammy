"use client";

import React, { useState, useEffect } from "react";
import ModalProject from "../Modals/ModalProject";

const MainTitle = () => {
  const [mousePosition, setMousePosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const [isMouseOutside, setIsMouseOutside] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMouseOutside(false); // Reset the flag when the mouse moves inside the window
    };

    const handleMouseLeave = () => {
      setIsMouseOutside(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const parallaxAmount = 50;
  const transitionDuration = "0.3s"; // Adjust the duration of the transition

  const transformStyle = isMouseOutside
    ? `translate(0, 0)`
    : `translate(${
        (mousePosition.x - window.innerWidth / 2) / parallaxAmount
      }px, ${(mousePosition.y - window.innerHeight / 2) / parallaxAmount}px)`;

  const style = {
    transform: transformStyle,
    transition: `transform ${transitionDuration}`,
  };

  return (
    <div
      className="flex flex-col text-center justify-center items-center align-middle h-screen w-full"
      style={style}
    >
      <svg
        width="142"
        height="158"
        viewBox="0 0 142 158"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M78.8889 158H63.1111V150.1H47.3333V142.2H31.5556V134.3H15.7778V126.4H0V31.6H15.7778V23.7H31.5556V15.8H47.3333V7.9H63.1111V0H78.8889V7.9H94.6667V15.8H110.444V23.7H126.222V31.6H142V126.4H126.222V134.3H110.444V142.2H94.6667V150.1H78.8889M78.8889 71.1V63.2H94.6667V55.3H110.444V47.4H126.222V39.5H110.444V31.6H94.6667V23.7H78.8889V15.8H63.1111V23.7H47.3333V31.6H31.5556V39.5H15.7778V47.4H31.5556V55.3H47.3333V63.2H63.1111V71.1M63.1111 134.3V79H47.3333V71.1H31.5556V63.2H15.7778V118.5H31.5556V126.4H47.3333V134.3M94.6667 134.3V126.4H110.444V118.5H126.222V63.2H110.444V71.1H94.6667V79H78.8889V134.3H94.6667Z"
          fill="white"
        />
      </svg>
      <ModalProject />
    </div>
  );
};

export default MainTitle;
