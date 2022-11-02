import React from "react";
import { useState } from "react";

export default function FormWrapper({ children, currentStep, currentPage }) {
  const [title, setTitle] = useState(currentStep);

  const Titles = () => {
    switch (currentStep) {
      case 0:
        if (currentPage === "riskpage") {
          return "PERFIL DE RIESGO DEL CLIENTE";
        } else {
          return "DATOS GENERALES";
        }
        break;
      case 1:
        if (currentPage === "riskpage") {
          return "PERFIL DE RIESGO DEL CLIENTE";
        } else {
          return "DATOS LABORALES";
        }
        break;
      case 2:
        if (currentPage === "riskpage") {
          return "PERFIL DE RIESGO DEL CLIENTE";
        } else {
          return "REFERENCIAS PERSONALES";
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
          return "";
        } else {
          return "INSTRUCCIONES PARA LIQUIDACIÓN DE FONDOS Y DATOS BANCARIOS";
        }
        break;
      case 5:
        return "";
        break;

      case 6:
        if (currentPage === "onBording_step_1") return "NOTIFICACIÓN";
        break;
      case 7:
        if (currentPage === "onBording_step_1") return "NOTIFICACIÓN";
        break;
      case 8:
        if (currentPage === "onBording_step_1") return "NOTIFICACIÓN";
        break;
      case 9:
        return "SISTEMA DE VINCULACIÓN DIGITAL";
        break;
      default:
        return "default";
        break;
    }
  };

  return (
    <div
      className={`md:w-11/12  h-full bg-[#F7F7F7] drop-shadow-2xl rounded-3xl ${
        currentPage === "riskpage"
          ? "w-[90%] md:w-[70%] lg:w-[70%]"
          : "lg:max-w-[50%]"
      }`}
    >
      <div
        className={`bg-[#1A3B69] text-white text-[70%] h-12 md:text-[100%] rounded-t-3xl flex-grow  flex pr-[2%] pl-[4%]  items-center font-montserrat font-bold ${
          currentStep === 9 ? "justify-center" : ""
        }`}
      >
        {<Titles />}
      </div>
      {children}
    </div>
  );
}
