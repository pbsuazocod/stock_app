import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function FormStepFive() {
  return (
    <div className="flex flex-col min-h-[50vh] ">
      <div className=" h-[30vh] flex flex-col justify-center items-center">
        <h1>EL FORMULARIO FUE ENVIADO EXITOSAMENTE.</h1>
        <h1 className="mt-[2%]">POR FAVOR LLENAR EL SEIGUIENTE FORMULARIO</h1>
      </div>
      <div className="flex flex-col flex-1 justify-between items-end mr-[2%] mb-[4%]">
        <div className="border-grey-300 border-t-4 w-full" />
        <Link
          to="/riskpage"
          type="submit"
          className={`bg-[#1A3B69] w-[40%] rounded-lg text-white h-12 lg:w-[25%] mr-[2%] lg:mr-0 text-sm mt-4 gap-2 flex justify-center items-center`}
        >
          CONTINUAR
          <div className="lg:text-3xl text-xl">
            <FaArrowRight />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default FormStepFive;
