import React, { useState } from "react";

export const OnlyReadField = (data) => {
  const [value, setValue] = useState(data["data"]);
  console.log(value);
  return (
    <div className="item__data__serial view">
      <span>{value === null ? "No data" : value}</span>
    </div>
  );
};
