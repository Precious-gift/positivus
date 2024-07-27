import { CustomButtonProps } from "@/types";
import React from "react";

const CustomButton = ({ title, containerStyles }: CustomButtonProps) => {
  return (
    <button
      className={`inline-block bg-black hover:bg-white text-white hover:text-black text-xl py-4 px-9 rounded-xl shadow-md ${containerStyles}`}
    >
      {title}
    </button>
  );
};

export default CustomButton;
