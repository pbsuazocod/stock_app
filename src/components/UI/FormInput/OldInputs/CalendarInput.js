import InputWrapper from "../InputWrapper";

import "./Styles.css";

export default function CalendarInput(props) {
  return (
    <InputWrapper {...props}>
      <input
        optionLabel="FECHA DE EMISIÓN"
        // value={year}
        // options={years}
        dropdownIcon={""}
        type="date"
        // onChange={(e) => {
        //   setYear(e.value);
        // }}
        // placeholder="Año"
      />
    </InputWrapper>
  );
}
