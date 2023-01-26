import React from "react";

export const CheckGoodStatus = ({ serial, status }) => {
  return (
    <div className="container__status__correct__delete">
      <img
        src="https://cdn.discordapp.com/attachments/630944122609467392/1068074640582381598/check-mark-button_2705.png"
        alt="check"
      />
      <div>
        <span>El Item "{serial}"</span>
        {status === "edit" ? <div> Fue editado correctamente</div> : null}
        {status === "delete" ? <div> Fue eliminado correctamente</div> : null}
      </div>
    </div>
  );
};
