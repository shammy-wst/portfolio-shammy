// NavMenu.tsx
'use client';

import Link from "next/link";

import React from "react";

interface NavMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const NavMenu: React.FC<NavMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed flex flex-col bg-black w-full h-full z-20 ${isOpen ? 'block' : 'hidden'}`}>
      <nav className="flex flex-col justify-center align-middle items-center h-screen">
        <svg
          width="20"
          height="20"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fixed top-10 right-10 cursor-pointer"
          onClick={onClose}
        >
          <path
            d="M1.46399 8.535L8.53599 1.465M1.46399 1.465L8.53599 8.535"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <ul className="flex flex-col justify-center items-center h-screen">
        <Link onClick={onClose} href="/">
          <li className="text-2xl font-bold mb-10 hover:underline rainbow-text">HOME</li>
          </Link>
          <Link href="/projects">
          <li className="text-2xl font-bold mb-10 hover:underline rainbow-text">PROJECTS</li>
          </Link>
          <Link href="/aboutme">
          <li className="text-2xl font-bold mb-10 hover:underline rainbow-text">ABOUT ME</li>
          </Link>
          <li className="text-2xl font-bold mb-10 hover:underline rainbow-text">CONTACT</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;
