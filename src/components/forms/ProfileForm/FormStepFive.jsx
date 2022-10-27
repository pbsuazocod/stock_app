import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "primereact/button";
import "./styles.css";

function FormStepFive() {
  return (
    <div className="flex flex-col min-h-[50vh] ">
      <div className=" h-[30vh] flex flex-col justify-center items-center">
        <h1>EL FORMULARIO FUE ENVIADO EXITOSAMENTE.</h1>
        <h1 className="mt-[2%]">POR FAVOR LLENAR EL SEIGUIENTE FORMULARIO</h1>
      </div>
      <div className="flex flex-col flex-1 justify-between items-end mr-[2%] mb-[4%]">
        <div className="border-grey-300 border-t-4 w-full" />
        <Link to={"/riskpage"}>
          <Button
            type="button"
            label="CONTINUAR"
            iconPos="right"
            icon="pi pi-arrow-right"
            className="p-button-raised"
          />
        </Link>
      </div>
    </div>
  );
}

export default FormStepFive;
