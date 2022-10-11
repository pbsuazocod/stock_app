import React from "react";

export default function FormWrapper({ children, formTitle }) {
  return (
    <div className="h-full w-11/12 lg:w-9/12 bg-[#F7F7F7] rounded-3xl">
      <div className="bg-[#1A3B69] text-white text-[70%] h-10 md:text-[100%] rounded-t-3xl flex-grow  flex pr-[2%] pl-[2%] justify-center items-center font-Montserrat ">
        {formTitle}
      </div>
      {children}
    </div>
  );
}
