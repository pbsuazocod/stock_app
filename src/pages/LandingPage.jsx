import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

// components

import PageWrapper from "../components/PageWrapper";
import FormWrapper from "../components/UI/FormWrapper/FormWrapper";
import { useEffect } from "react";


function LandingPage({ isLoggedIn }) {

  const [count, setCount] = useState(0);
  const [marketsList, setMarketsList] = useState([])
  const [marketCompany, setMarketCompany] = useState('')

  useEffect(() => {
    function getStockCompany() {
      axios.get('https://bdv-backend.staging.applab.do/api/all-data').then((result) => {
        setMarketsList(result.data.stockMarkets)
        if (result.status === 200) {
        } else {
        }
      }).catch((e) => {
        console.log(e)
      })
    }
    getStockCompany();
  }, [])

  const ListOfMarkets = (
    marketsList.map((marketList) => {
      return (
        <Link to="/onboarding"
          state={{ market_id: marketList.id }}
          className="flex justify-center p-[2%] items-center bg-white w-[45%] h-[40%] min-w-[200px] min-h-[6vw] rounded-lg"
          key={marketList.name}
          style={{ pointerEvents: count === 0 ? '' : 'none' }} >
          <img
            className="w-[90%]"
            src={marketList.image}
            alt={marketList.name}
          />
        </Link>
      )
    })
  )

  return (
    <PageWrapper>
      <FormWrapper currentStep={9} marketCompany={marketCompany} >
        <div className=" grid  grid-cols-2 gap-4  mr-[10%] ml-[10%] mt-[4%] mb-[10%]">
          {ListOfMarkets}
        </div>
      </FormWrapper>
    </PageWrapper>
  );
}

export default LandingPage;
