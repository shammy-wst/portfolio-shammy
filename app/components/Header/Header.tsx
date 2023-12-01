"use client";

import React, { useState } from "react";
import ModalProject from "../Modals/ModalProject";

const Header = () => {
  const [isModalProjectVisible, setModalProjectVisible] = useState(false);

  const handleProjectsClick = () => {
    setModalProjectVisible(true);
  };

  const handleCloseModal = () => {
    setModalProjectVisible(false);
  };

  return (
    <nav className="flex justify-center align-center flex-col w-full bg-[#1B1B1B] p-4 absolute top-0 left-0 right-0 z-10">
      <ul className="flex flex-row justify-between text-lg font-bold uppercase">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#" onClick={handleProjectsClick}>
            Projects
          </a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      {/* Utilisation de l'opérateur ternaire pour conditionnellement rendre le ModalProject */}
      {isModalProjectVisible && <ModalProject onClose={handleCloseModal} />}
    </nav>
  );
};

export default Header;
