// import React, { useState, useEffect } from "react";

import { Calendar } from "primereact/calendar";

import InputWrapper from "./InputWrapper";

import "./Styles.css";

export default function CalendarInput(props) {
  return (
    <InputWrapper {...props}>
      <Calendar
        optionLabel="FECHA DE EMISIÓN"
        // value={year}
        // options={years}
        dropdownIcon={""}
        // onChange={(e) => {
        //   setYear(e.value);
        // }}
        // placeholder="Año"
      />
    </InputWrapper>
  );
}
