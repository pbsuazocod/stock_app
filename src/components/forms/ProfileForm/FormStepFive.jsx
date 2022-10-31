import React, { useState } from "react";
import FormikControl from "../../formik/FormikControl";

// Data
import { radioOptions } from "../../config/constants";
import { stockOptions } from "../../config/constants";
import { saleOptions } from "../../config/constants";

function FormStepFive() {
  // State Management
  // const [stockPurchase, setStockPurchases] = useState(true);
  // const [saleValues, setSaleValues] = useState(true);

  return (
    <div className="space-y-4 m-[3%] font-montserrat font-bold">
      <h1 className="text-xl text-[#1A3B69] mb-[2%]">LIQUIDACIÓN DE FONDOS</h1>
      <div className="flex items-center">
        <label className="pl-2">
          POR COMPRAS DE VALORES O VENCIMIENTO DE OPERACIONES A CARGO DEL
          CLIENTE
        </label>
      </div>

      <div className="pl-[2%]">
        <FormikControl
          control="radio"
          label=""
          name="stock_purchase"
          options={stockOptions}
          className="pt-2"
          layout
        />
      </div>

      <div className="flex items-center">
        <label className="pl-2">
          POR VENTA DE VALORES O VENCIMIENTO DE OPERACIONES A FAVOR DEL CLIENTE
        </label>
      </div>

      <div className="pl-[2%]">
        <FormikControl
          control="radio"
          label=""
          name="sale_values"
          options={saleOptions}
          className="pt-2"
          layout
        />
      </div>

      <div className=" mb-[2%] border-t-2 border-[#C1C1C1]" />

      <div>
        <h1 className="text-xl text-[#1A3B69] mb-[2%]">CUENTA BANCARIA</h1>
        <div className="grid-none md:grid grid-rows-2 grid-cols-2 gap-4">
          <div>
            <FormikControl
              control="input"
              name={"owner_of_the_account"}
              label={"NOMBRE DEL TITULAR DE LA CUENTA"}
              type="text"
            />
          </div>

          <div>
            <FormikControl
              control="input"
              name={"bank_name"}
              label={"BANCO"}
              type="text"
            />
          </div>
          <div>
            <FormikControl
              control="input"
              name={"type_of_account"}
              label={"TIPO DE CUENTA"}
              type="text"
            />
          </div>

          <div>
            <FormikControl
              control="input"
              name={"account_number"}
              label={"NÚMERO DE CUENTA"}
              type="text"
            />
          </div>
        </div>
        <div className=" mt-[2%] mb-[2%] border-t-2 border-[#C1C1C1]" />
        <h1 className="text-xl text-[#1A3B69] mb-[2%]">
          MEDIO PARA LA RECEPCION DE INFORMACION
        </h1>
        <div className="flex">
          <div>
            <FormikControl
              control="radio"
              label=""
              name="receive_email_auth"
              options={[{ key: "", value: "Si" }]}
              className="pt-2"
            />
          </div>
          <p>
            ACEPTO RECIBIR Y ENVIAR LA INFORMACIÓN RELACIONADA A LA CUENTA DE
            VALORES POR MEDIOS ELECTRONICOS
          </p>
        </div>
        <div className="mt-[2%] mb-[2%] border-t-2 border-[#C1C1C1]" />
        ES USTED PEP (PERSONA EXPUESTA POLITICAMENTE)
        <span className="text-[#40B879]">*</span>
        <p className="font-normal text-sm">
          Personas naturales que desempeñan o han desempeñado funciones públicas
          en nuestro país o en el extranjero (Eje. Presidente, Ministros,
          Diputados, Alcaldes, Fiscal, Magistrado, Embajadores, etc)
        </p>
        <div className="pt-2 mb-[2%]">
          <FormikControl
            control="radio"
            label=""
            name="PEP"
            options={radioOptions}
          />
        </div>
        ES USTED CIUDADANO O RESIDENTE (GREEN CARD) ESTADOUNIDENSE
        <span className="text-[#40B879]">*</span>
        <div className="flex gap-6 pt-2 mb-[2%]">
          <FormikControl
            control="radio"
            label=""
            name="green_card"
            options={radioOptions}
          />
        </div>
        <div className="flex gap-1">
          <span className="text-[#40B879]">*</span>
          <p className="font-normal text-sm">
            En caso su respuesta sea SI la CCB le solicitara documentación
            adicional en cumplimiento a la Ley FATCA y Ley contral el Lavado de
            Dinero y Financiamiento al terrorismo
          </p>
        </div>
      </div>
    </div>
  );
}

export default FormStepFive;
