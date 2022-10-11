import React from "react";
import {useState} from "react";

export default function FormWrapper({children, formTitle, currentStep}) {

    const [title,
        setTitle] = useState(currentStep)

    const Titles = () => {
    // if (currentStep === 0) {
    //   return "pedro"
    // }else return "error"

switch (currentStep, formTitle) {
  case formTitle:
   return formTitle
     break;
    case 0:
      return 'Pedro'
      break;  

  default:
    return 'default'
    break;
}

    }

    return (
        <div className="h-full w-11/12 lg:w-9/12 bg-[#F7F7F7] rounded-3xl">
            <div
                className={`bg-[#1A3B69] text-white text-[70%] h-10 md:text-[100%] rounded-t-3xl flex-grow  flex pr-[2%] pl-[2%]  items-center font-Montserrat ${currentStep === null ? "" : "justify-center"}`} >
                {< Titles />}
                {/* {JSON.stringify(title)} */}
                {/* {JSON.stringify(currentStep)} */}
            </div>
            {children}
        </div>
    );
}
