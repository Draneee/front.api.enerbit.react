import React, { useState } from "react";

const SelectWithText = ({ data, optionsSelect }) => {
  const [value, setValue] = useState(data["data"]);
  const [options, setOptions] = useState(optionsSelect);
  console.log(options);
  return (
    <select
      className="select__with__text"
      onChange={(e) => handleChangeItemsPerPage(e.target.value)}
    >
      {options?.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectWithText;
