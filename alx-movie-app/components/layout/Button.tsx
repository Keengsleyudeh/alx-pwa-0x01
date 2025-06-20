import React from "react";

const Button = ({ title }: { title: string }) => {
  return (
    <>
      <button className="px-4 py-2 bg-[#E2D609]">{title}</button>
    </>
  );
};
export default Button;
