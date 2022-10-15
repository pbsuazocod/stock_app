import React from "react";
import { useState } from "react";

export default function FormWrapper({
  children,
  currentStep,
  currentPage,
}) {
  const [title, setTitle] = useState(currentStep);

  const Titles = () => {


    switch (currentStep) {
      case 0:
        return "SELECCIONE LA CASA DE CORREDORES DE BOLSA CON LA QUE DESEA VINCULARSE";
        break;
      case 1:
        if (currentPage === "riskpage") {
          return "PERFIL DE RIESGO DEL CLIENTE";
        } else {
          return "DATOS GENERALES";
        }
        break;
      case 2:
        if (currentPage === "riskpage") {
          return "PERFIL DE RIESGO DEL CLIENTE";
        } else {
          return "DATOS LABORALES";
        }
        break;
      case 3:
        if (currentPage === "riskpage") {
          return "PERFIL DE RIESGO DEL CLIENTE";
        } else {
          return "FIRMAS AUTORIZADAS";
        }
        break;
      case 4:
        if (currentPage === "riskpage") {
          return "PERFIL DE RIESGO DEL CLIENTE";
        } else {
          return "INSTRUCCIONES PARA LIQUIDACIÓN DE FONDOS";
        }
        break;
      case 5:
        return "INSTRUCCIONES PARA LIQUIDACIÓN DE FONDOS";
        break;

      default:
        return "default";
        break;
    }
  };

  return (
    <div className={`w-11/12 h-full bg-[#F7F7F7] rounded-3xl ${currentPage === 'riskpage' ? 'w-[70%]': 'lg:max-w-[50%]' }`}>
      <div
        className={`bg-[#1A3B69] text-white text-[70%] h-12 md:text-[100%] rounded-t-3xl flex-grow  flex pr-[2%] pl-[4%]  items-center font-Montserrat ${
          currentStep === 0 ? "justify-center" : ""
        }`}
      >
        {<Titles />}
      </div>
      {children}
    </div>
  );
}
