// Header.tsx

'use client';

import React, { useState } from "react";
import NavMenu from "./NavMenu";

const Header: React.FC = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const toggleNavMenu = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  };

  return (
    <div>
      <header className="fixed top-0 right-0 flex flex-row justify-end p-9">
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
