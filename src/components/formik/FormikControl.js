import React from "react";
import Input from "../UI/FormInput/Input";
import Select from "../UI/FormInput/Select";
import TextArea from "../UI/FormInput/TextArea";
import Radio from "../UI/FormInput/Radio";
import Date from "../UI/FormInput/Date";
import Number from "../UI/FormInput/Number";
import CheckBoxGroup from '../UI/FormInput/CheckBoxGroup'

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
      return <Date {...rest} />;
    case "number":
      return <Number {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
