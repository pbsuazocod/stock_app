import React from "react";
import { Link } from "react-router-dom";
import { TbChecks } from "react-icons/tb";

function RiskStepFive() {
  return (
    <div className="flex flex-col min-h-[30vh] font-montserrat font-bold ">
      <Link
        to="/"
        className="pl-[2%] pr-[2%] h-[30vh] flex flex-col justify-center items-center"
      >
        <h1>
          Su solicitud de vinculación fue enviada exitosamente, la CCB de su
          elección se contactará con usted para continuar con el proceso.
        </h1>
        <h1>GRACIAS</h1>
        <TbChecks className="text-green-300 text-7xl" />
      </Link>
    </div>
  );
}

export default RiskStepFive;
