import React, { useState } from "react";

function InputField(props) {
  const [value, setValue] = useState(props.data);
  return (
    <input
      type={props.typeInput}
      placeholder={value}
      value={value}
      name={props.name}
      onChange={(e) => {
        setValue(e.target.value);
        props.onChange(e);
      }}
    />
  );
}

export default InputField;
