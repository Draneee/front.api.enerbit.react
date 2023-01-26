import React, { useState } from "react";

export const OnlyReadField = (data) => {
  const [value, setValue] = useState(data["data"]);
  return (
    <div className="item__data__serial view">
      <span>{!value ? "No data" : value}</span>
    </div>
  );
};
