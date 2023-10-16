import React from "react";

const Videoloop = () => {
  return (
    <div className="flex inset-0 fixed">
      <div className="absolute inset-0 w-full h-full object-cover bg-black opacity-80 z-10"></div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Videoloop;
