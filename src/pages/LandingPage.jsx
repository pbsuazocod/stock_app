import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

// components

import PageWrapper from "../components/PageWrapper";
import FormWrapper from "../components/UI/FormWrapper/FormWrapper";
import { useEffect } from "react";

function LandingPage({ isLoggedIn }) {
  const [count, setCount] = useState(0);
  const [marketsList, setMarketsList] = useState([]);
  const [marketCompany, setMarketCompany] = useState("");

  useEffect(() => {
    function getStockCompany() {
      axios
        .get("https://bdv-backend.staging.applab.do/api/all-data")
        .then((result) => {
          setMarketsList(result.data.stockMarkets);
          if (result.status === 200) {
          } else {
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
    getStockCompany();
  }, []);

  const ListOfMarkets = marketsList.map((marketList) => {
    return (
      <Link
        to="/onboarding"
        state={{ market_id: marketList.id }}
        className=" flex justify-center bg-white p-[2%] w-[42vw] h-[22vw] md:h-[15vw] lg:h-[5vw] lg:w-[12vw] rounded-lg"
        key={marketList.name}
        style={{ pointerEvents: count === 0 ? "" : "none" }}
      >
        <img className="w-[90%]" src={marketList.image} alt={marketList.name} />
      </Link>
    );
  });

  return (
    <PageWrapper>
      <FormWrapper currentStep={9} marketCompany={marketCompany}>
        <h1 className=" font-montserrat font-bold tesxt-black pr-[4%] pt-[2%] pl-[4%] text-center">
          BIENVENIDO AL SISTEMA DE VINCULACIÓN DIGITAL DE LA BOLSA DE VALORES
          DEL SALVADOR. POR FAVOR SELECCIONE SU CASA CORREDORA DE BOLSA
          PREFERIDA PARA INICIAR CON EL PROCESO DE REGISTRO.
        </h1>
        <div className="p-[2%] flex flex-col items-center gap-4 flex-wrap lg:max-h-[20vw]">
          {ListOfMarkets}
        </div>
        <h2 className=" p-[4%] text-justify text-sm">
          - Disclamer: “Al escoger una casa de corredores usted acepta que la
          información proporcionada es con la finalidad de solicitar su
          vinculación como cliente de esa casa de corredores, por lo que su
          aceptación o no es responsabilidad únicamente de la casa de corredores
          escogida; además acepta que su información sea utilizada, compartida y
          verificada exclusivamente para dicho fin”
        </h2>
      </FormWrapper>
    </PageWrapper>
  );
}

export default LandingPage;
