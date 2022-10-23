import React from "react";
import FormikControl from "./FormikControl";

function Text() {
  const dropdownOptions = [
    { key: "select an option", value: "" },
    { key: "Option 1", value: "Pedro" },
    { key: "option 2", value: "maria" },
  ];

  const radioOptions = [
    { key: "select an option", value: "" },
    { key: "Option 1", value: "Pedro" },
    { key: "option 2", value: "maria" },
  ];

  const checkBoxOptions = [
    { key: "select an option", value: "juan" },
    { key: "Option 1", value: "Pedro" },
    { key: "option 2", value: "maria" },
  ];
  return (
    <div>
      hello
      <FormikControl control="input" type="email" label="Email" name="email" />
      <FormikControl
        control="textarea"
        label="Description"
        name="description"
      />
      <FormikControl
        control="select"
        label="DropDown"
        name="selectOption"
        options={dropdownOptions}
      />
      <FormikControl
        control="radio"
        label="Radio"
        name="radioOptions"
        options={radioOptions}
      />
      <FormikControl
        control="checkbox"
        label="ckeckbox"
        name="checkBoxOptions"
        options={checkBoxOptions}
      />
    </div>
  );
}

export default Text;
