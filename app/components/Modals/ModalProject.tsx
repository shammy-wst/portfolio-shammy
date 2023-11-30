import React from "react";

const ModalProject = () => {
  return (
    <div className="fixed bg-black border-8 w-4/5 h-4/5 p-4">
      <div className="flex flex-col">
        <nav className="flex flex-row-reverse justify-between w-full">
          <figure>Cross close</figure>
          <div>
            <p>Left</p>
            <p>Right</p>
          </div>
        </nav>
        <article className="flex flex-col gap-12">
          <div className="flex justify-center align-middle text-center pb-9">
            <h1 className="uppercase font-bold text-7xl">Project name</h1>
          </div>
          <div className="flex flex-col text-left w-1/4 text-xl justify-between">
            <div>
              <p>Project description :</p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                delectus dolorem quia amet, soluta quaerat culpa, iusto
                similique ipsum expedita, magnam placeat ratione consequatur
                nihil tempora aliquam quisquam quidem. Delectus?
              </p>
            </div>
            <figure className="border-4 border-white w-40 h-40">
              <p>photo</p>
            </figure>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ModalProject;
