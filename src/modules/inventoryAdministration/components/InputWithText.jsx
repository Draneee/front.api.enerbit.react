import React, { useState } from "react";

const InputWithText = (data) => {
  const [value, setValue] = useState(data["data"]);
  console.log(value);
  return (
    <input
      type="text"
      placeholder={value}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default InputWithText;
