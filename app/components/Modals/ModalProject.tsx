'use client';

import React from "react";

interface ModalProjectProps {
  onClose: () => void;
}

const ModalProject: React.FC<ModalProjectProps> = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-[#1B1B1B] z-50">
      <div className="fixed bg-[#1b1b1b] border-8 w-4/5 h-3/5 p-4 opacity-100">
        <div className="flex flex-col">
          <nav className="flex flex-row-reverse justify-between w-full">
            <figure onClick={onClose}>
              <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.778 14.42L11.276 8.91696L16.776 3.41496L13.949 0.584961L8.44597 6.08696L2.94397 0.584961L0.115967 3.41496L5.61597 8.91696L0.115967 14.419L2.94597 17.247L8.44597 11.745L13.946 17.247L16.778 14.42Z"
                  fill="#F8F8F8"
                />
              </svg>
            </figure>
            <div className="flex flex-row gap-4 justify-between">
              <svg
                width="8"
                height="15"
                viewBox="0 0 8 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 7.5L8 0V15L0 7.5Z" fill="#F8F8F8" />
              </svg>

              <svg
                width="8"
                height="15"
                viewBox="0 0 8 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 7.5L0 0V15L8 7.5Z" fill="#F8F8F8" />
              </svg>
            </div>
          </nav>
          <article className="flex flex-col gap-12">
            <div className="flex justify-center align-middle text-center">
              <h1 className="uppercase font-bold text-7xl">Project name</h1>
            </div>
            <div className="flex flex-row text-left w-full text-xl justify-between">
              <div className="border-4 border-white w-3/12 h-3/12 p-4">
                <p className="font-bold text-3xl uppercase">
                  Project description :
                </p>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  delectus dolorem quia amet, soluta quaerat culpa, iusto
                  similique ipsum expedita, magnam placeat ratione consequatur
                  nihil tempora aliquam quisquam quidem. Delectus?
                </p>
              </div>
              <nav className="flex border-4 p-2">
                <ul className="flex flex-col items-center text-center gap-4 uppercase">
                  <li className="font-bold text-3xl uppercase">Stack Used :</li>
                  <li className="font-bold hover:underline hover:bg-white hover:border-4 border-black hover:text-black hover:p-4 transition duration-100 ">
                    Stack 2
                  </li>
                  <li className="font-bold hover:underline hover:bg-white hover:border-4 border-black hover:text-black hover:p-4 transition duration-100">
                    Stack 3
                  </li>
                  <li className="font-bold hover:underline hover:bg-white hover:border-4 border-black hover:text-black hover:p-4 transition duration-100">
                    Stack 4
                  </li>
                </ul>
              </nav>
              <figure className="border-4 border-white w-3/12 3/12">
                <p>photo</p>
              </figure>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ModalProject;

