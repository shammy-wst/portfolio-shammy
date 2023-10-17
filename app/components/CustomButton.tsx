import React from "react";
import Button from "@mui/material/Button";

interface TextButton {
  text: string;
}

const CustomButton: React.FC<TextButton> = ({ text }) => {
  return (
    <Button
      variant="outlined"
      className="
          bg-white
          text-black
          hover:bg-black
          hover:text-white
          border-2
          border-black
          hover:border-white
          uppercase
          font-bold
          py-2
          px-4
          rounded-none
          cursor-pointer
          max-w-max
          md:text-base
          text-sm
          "
    >
      {text}
    </Button>
  );
};

export default CustomButton;
