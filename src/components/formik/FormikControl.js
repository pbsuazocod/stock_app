import React from "react";
import Input from "../UI/FormInput/Input";
import Select from "../UI/FormInput/Select";
import TextArea from "../UI/FormInput/TextArea";
import Radio from "../UI/FormInput/Radio";
import CheckBoxGroup from "../UI/FormInput/CheckBoxGroup";
import DatePicker from "../UI/FormInput/DatePicker";


function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <Radio {...rest} />;
    case "checkbox":
      return <CheckBoxGroup {...rest} />;
    case "date":
      return <DatePicker {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
