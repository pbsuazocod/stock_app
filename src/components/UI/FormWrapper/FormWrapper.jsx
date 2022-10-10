import React from "react";

export default function FormWrapper({ children, formTitle }) {
  return (
    <div className="w-3/4 h-96 bg-[#F7F7F7]  rounded-3xl">
      <div className="bg-[#1A3B69] text-white text-[70%] h-[13%] md:text-[100%] rounded-t-3xl flex pr-[2%] pl-[6%] justify-center items-center font-Montserrat ">
        {formTitle}
      </div>
      {children}
    </div>
  );
}
