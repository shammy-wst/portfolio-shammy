// Header.tsx

'use client';

import React, { useState } from "react";
import NavMenu from "./NavMenu";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const toggleNavMenu = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  };

  return (
    <div className="fixed z-20">
      <header className="fixed top-0 right-0 flex flex-row justify-between w-full p-4 bg-black">
        <Link href="/">
        <figure>
        <Image
          src="/assets/cube.gif"
          alt="CubeGif"
          width={25}
          height={25}
          priority
        />
        </figure>
        </Link>
        {!isNavMenuOpen && (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
            onClick={toggleNavMenu}
          >
            <path
              d="M3 6.00101H21M3 12.001H21M3 18.001H21"
              stroke="#F8F8F8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </header>
      <NavMenu isOpen={isNavMenuOpen} onClose={toggleNavMenu} />
    </div>
  );
};

export default Header;
