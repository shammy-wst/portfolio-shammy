import React from "react";
import Image from "next/image";

const MainComponent = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <figure className="scale-75 z-10" style={{ width: "200px", height: "200px" }}>
        <Image
          src="/assets/cube.gif"
          alt="CubeGif"
          width={500}
          height={500}
          priority
        />
      </figure>
      <div className="flex flex-col">
      <h1 className="uppercase font-extrabold text-3xl pb-10">
        <span className="text-[#E733FF]">s</span>
        <span className="text-[#FE2396]">h</span>
        <span className="text-[#FF6F64]">a</span>
        <span className="text-[#FF8E2D]">m</span>
        <span className="text-[#FFD525]">m</span>
        <span className="text-[#FFEE15]">y</span>
      </h1>
      <p className="flex justify-center items-center">
        <span className="text-[#E733FF]">D</span>
        <span className="text-[#FF6F64]">E</span>
        <span className="text-[#FFD525]">V</span>
      </p>
      <p className="flex justify-center items-center text-stone-500">STAKY.IO</p>

      </div>
     
    </div>
  );
};

export default MainComponent;
