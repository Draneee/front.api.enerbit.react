import React from "react";
import InputWithText from "./InputWithText";

const FormItem = () => {
  return (
    <>
      <div className="item__serial__label">
        Serial
        <div className="item__data__serial edit">
          <span>
            <InputWithText />
          </span>
        </div>
      </div>
      <div className="item__serial__label">
        Tipo de conexion
        <div className="item__data__serial edit">
          <span>
            <InputWithText />
          </span>
        </div>
      </div>
      <div className="item__serial__label">
        Sistema de Almacenamiento
        <div className="item__data__serial edit">
          <span>
            <InputWithText />
          </span>
        </div>
      </div>
      <div className="item__serial__label">
        Condicion
        <div className="item__data__serial edit">
          <span>
            <InputWithText />
          </span>
        </div>
      </div>
      <div className="item__serial__label">
        Owner
        <div className="item__data__serial edit">
          <span>
            <InputWithText />
          </span>
        </div>
      </div>
      <div className="item__serial__label">
        Location
        <div className="item__data__serial edit">
          <span>
            <InputWithText />
          </span>
        </div>
      </div>
      <div className="item__serial__label">
        Fabricante
        <div className="item__data__serial edit">
          <span>
            <InputWithText />
          </span>
        </div>
      </div>
      <div className="item__serial__label">
        Fecha de Compra
        <div className="item__data__serial edit">
          <span>
            <InputWithText />
          </span>
        </div>
      </div>
      <div className="item__serial__label">
        i_max
        <div className="item__data__serial edit">
          <span>
            <InputWithText />
          </span>
        </div>
      </div>
      <div className="item__serial__label">
        i_b
        <div className="item__data__serial edit">
          <span>
            <InputWithText />
          </span>
        </div>
      </div>
      <div className="item__serial__label">
        i_n
        <div className="item__data__serial edit">
          <span>
            <InputWithText />
          </span>
        </div>
      </div>
      <div className="item__serial__label">
        Sellos
        <div className="item__data__serial edit">
          <span>
            <InputWithText />
          </span>
        </div>
      </div>
      <div className="item__serial__label">
        ID
        <div className="item__data__serial edit">
          <span>
            <InputWithText />
          </span>
        </div>
      </div>
      <div className="item__serial__label">
        Creado en
        <div className="item__data__serial edit">
          <span>
            <InputWithText />
          </span>
        </div>
      </div>
      <div className="item__serial__label">
        Actualizado en
        <div className="item__data__serial edit">
          <span>
            <InputWithText />
          </span>
        </div>
      </div>
    </>
  );
};

export default FormItem;
