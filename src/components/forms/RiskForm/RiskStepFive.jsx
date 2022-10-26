import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function RiskStepFive() {
  return (
    <div className="flex flex-col min-h-[30vh] ">
      <Link
        to="/"
        className=" h-[30vh] flex flex-col justify-center items-center"
      >
        <h1>EL FORMULARIO FUE ENVIADO EXITOSAMENTE.</h1>
      </Link>
    </div>
  );
}

export default RiskStepFive;
