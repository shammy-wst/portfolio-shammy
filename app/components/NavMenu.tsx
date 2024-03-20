// NavMenu.tsx
"use client";

import Link from "next/link";

import React from "react";

interface NavMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const NavMenu: React.FC<NavMenuProps> = ({ isOpen, onClose }) => {
  const handleLinkClick = () => {
    // Appeler onClose pour fermer la navigation
    onClose();
  };

  return (
    <div
      className={`fixed flex flex-col bg-black w-full h-full z-20 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="fixed top-0 right-0 flex m-6">
        <button
          className="text-2xl font-bold text-white p-4"
          onClick={handleLinkClick}
        >
          x
        </button>
      </div>
      <nav className="flex flex-col justify-center align-middle items-center h-screen">
        {/* ... (rest of the code) */}
        <ul className="flex flex-col justify-center items-center h-screen">
          <Link href="/" passHref>
            <li
              className="text-2xl font-bold mb-10 hover:underline rainbow-text"
              onClick={handleLinkClick}
            >
              HOME
            </li>
          </Link>
          <Link href="/projects" passHref>
            <li
              className="text-2xl font-bold mb-10 hover:underline rainbow-text"
              onClick={handleLinkClick}
            >
              PROJECTS
            </li>
          </Link>
          <Link href="/aboutme" passHref>
            <li
              className="text-2xl font-bold mb-10 hover:underline rainbow-text"
              onClick={handleLinkClick}
            >
              ABOUT ME
            </li>
          </Link>
          <Link href="/contact" passHref>
            <li
              className="text-2xl font-bold mb-10 hover:underline rainbow-text"
              onClick={handleLinkClick}
            >
              CONTACT
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;
