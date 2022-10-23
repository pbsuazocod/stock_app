
import { useState } from 'react'
import FormikControl from "../../formik/FormikControl";


function RiskStepOne() {

    const [adicLang, setAdicLang] = useState(false)

    return (
        <div className="p-[2%]">
            <div className="pl-[1%]">
                <p>¿DOMINA UN IDIOMA ADICIONAL AL IDIOMA ESPAÑOL?</p>
                <div className="flex gap-2">
                    <div className="flex items-center">
                        <input
                            id='si'
                            value='true'
                            type="radio"
                            onChange={() => { setAdicLang(true) }}
                        />
                        <label className="pl-2">SI</label>
                    </div>
                    <FormikControl
                        control="radio"
                        label=""
                        name="aditional_language"
                        options={[{ key: "NO", value: "NO" }]}
                        className="pt-2"
                        // disabled={stockPurchase}
                        layout
                    />
                </div>
            </div>

            <div className="mt-[2%] ml-[2%] border-l-4 pr-[2%] pl-[1%] border-[#40B879] first-line:border-solid">
                <div className=" grid-none md:grid grid-row-1 lg:grid-cols-4 grid-col-1 gap-4 ">
                    <FormikControl
                        control='input'
                        name={"language"}
                        label={"IDIOMA"}
                        type='text'
                    />

                    <FormikControl
                        control='input'
                        name={"reading_domain"}
                        label={"% DOMINIO DE LECTURA"}
                        type='text'
                    />
                    <FormikControl
                        control='input'
                        name={"writing_domain"}
                        label={"% DOMINIO DE ESCRITURA"}
                        type='text'
                    />
                    <FormikControl
                        control='input'
                        name={"oral_expresion_domain"}
                        label={"% DOMINIO EXPRESIÓN ORAL"}
                        type='text'
                    />
                </div>
            </div>
        </div>
    )
}

export default RiskStepOne