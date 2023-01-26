import React from "react";

export const AddProduct = ({ onClick }) => {
  return (
    <button type="button" className="btn__modal" onClick={onClick}>
      <svg
        width="23"
        height="23"
        viewBox="0 0 23 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.25 0.5H19.75C21.2625 0.5 22.5 1.7375 22.5 3.25V19.75C22.5 21.2625 21.2625 22.5 19.75 22.5H3.25C1.7375 22.5 0.5 21.2625 0.5 19.75V3.25C0.5 1.7375 1.7375 0.5 3.25 0.5ZM12.875 12.875H18.375V10.125H12.875V4.625H10.125V10.125H4.625V12.875H10.125V18.375H12.875V12.875Z"
          fill="white"
        />
      </svg>
      Agregar producto
    </button>
  );
};
