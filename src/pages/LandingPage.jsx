import React from "react";
import PageWrapper from "../components/PageWrapper";
import logo_bursatiles from '../components/images/logo_bursatiles.png'
import logo_hencorp from '../components/images/logo_hencorp.png'
import {Link} from 'react-router-dom'

function LandingPage() {
    return (
        <PageWrapper>
            <div className="w-3/4 h-96 bg-[#F7F7F7]  rounded-3xl">
                <div
                    className="bg-[#1A3B69] text-white text-[70%] h-[13%] md:text-[100%] rounded-t-3xl flex pr-[2%] pl-[6%] justify-center items-center font-Montserrat ">
                    SELECCIONE LA CASA DE CORREDORES DE BOLSA CON LA QUE DESEA VINCULARSE
                </div>
                <div
                    className=" flex h-[80%] items-center  mr-[2.5%] ml-[2.5%] justify-between">
                    <Link className="pt-[2%] pl-[2%] items-center bg-white w-[45%] h-[40%] rounded-lg">
                        <img src={logo_bursatiles} alt="logo corredora bursatil"/>
                        <div className="text-sm text-[#1A3B69] font-bold">
                            <p>SERVICIOS GENERALES</p>
                            <p>BURSATILES S.A. DE C.V.</p>
                        </div>
                    </Link>
                    <Link className="pt-[2%] pl-[2%] items-center bg-white w-[45%] h-[40%] rounded-lg">
                        <img src={logo_hencorp} alt="logo corredora hencorp"/>
                        <div className="text-sm text-[#1A3B69] font-bold">
                            <p>SERVICIOS GENERALES</p>
                            <p>BURSATILES S.A. DE C.V.</p>
                        </div>
                    </Link>
                    
                </div>

            </div>
        </PageWrapper>
    );
}

export default LandingPage;
