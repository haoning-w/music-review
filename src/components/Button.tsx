"use client";

import { type ReactNode } from "react";

type ButtonProps = {
  onClick?: () => void;
  children: ReactNode;
  type?: string;
};

function Button({ onClick, children, type = "primary" }: ButtonProps) {
  let btnColor: string = "";
  if (type === "primary") {
    btnColor = " bg-color-green-2 hover:bg-color-green-3";
  } else if (type === "secondary") {
    btnColor = " bg-slate-300 hover:bg-slate-400";
  }

  return (
    <button
      className={
        "text-sm px-4 lg:text-base lg:px-6 py-2 rounded-full transition duration-300" +
        btnColor
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
