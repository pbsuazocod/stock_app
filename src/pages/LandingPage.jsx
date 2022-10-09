import React from "react";
import PageWrapper from "../components/PageWrapper";

function LandingPage() {
    return (
        <PageWrapper>
            <div className="w-3/4 h-96 bg-[#F7F7F7]  rounded-3xl">
                <div
                    className="bg-[#1A3B69] text-white text-[70%] h-[13%] md:text-[100%] rounded-t-3xl flex pr-[2%] pl-[6%] justify-center items-center font-Montserrat ">
                    SELECCIONE LA CASA DE CORREDORES DE BOLSA CON LA QUE DESEA VINCULARSE
                </div>
                <div
                    className=" flex bg-black mt-40 overflow-hidden justify-between mr-[2.5%] ml-[2.5%]">
                    <div className="box1 bg-red-300">
                        Hello
                    </div>
                    <div className="box2 bg-green-300">
                        Hello
                    </div>
                </div>

            </div>
        </PageWrapper>
    );
}

export default LandingPage;
