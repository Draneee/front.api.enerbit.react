import React, { useState } from "react";

const ItemsPerPageSelector = ({ onChangeItemsPerPage }) => {
  const options = [8, 16, 24, 32];
  return (
    <div className="items__per__page__selector">
      <label>Items por página:</label>
      <select onChange={(e) => handleChangeItemsPerPage(e.target.value)}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ItemsPerPageSelector;
