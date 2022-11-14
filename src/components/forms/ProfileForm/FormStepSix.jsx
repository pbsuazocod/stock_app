import React from "react";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import "./styles.css";

function FormStepSix() {
  return (
    <div className="flex flex-col min-h-[50vh] font-montserrat font-bold ">
      <div className=" h-[30vh] flex flex-col justify-center items-center text-center">
        <h1>EL FORMULARIO FUE ENVIADO EXITOSAMENTE.</h1>
        <h1 className="mt-[2%]">POR FAVOR COMPLETE SU PERFIL DE RIESGO</h1>
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

export default FormStepSix;
