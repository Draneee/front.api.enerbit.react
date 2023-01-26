import React from "react";
import InputWithText from "./InputWithText";
import { OnlyReadField } from "./OnlyReadField";
import SelectWithText from "./SelectWithText";

const FormAddProduct = ({ onChange }) => {
  return (
    <>
      <div className="item__serial__label">
        Serial
        <div className="item__data__serial edit">
          <InputWithText typeInput={"text"} onChange={onChange} name="serial" />
        </div>
      </div>
      <div className="item__serial__label">
        Tipo de conexion
        <div className="item__data__serial edit">
          <SelectWithText
            onChange={onChange}
            name="connection_type"
            optionsSelect={["", "directa", "semi-directa", "indirecta"]}
          />
        </div>
      </div>
      <div className="item__serial__label">
        Sistema de Almacenamiento
        <div className="item__data__serial edit">
          <SelectWithText
            onChange={onChange}
            name="storage_system"
            optionsSelect={["", "interno", "externo"]}
          />
        </div>
      </div>
      <div className="item__serial__label">
        Condicion
        <div className="item__data__serial edit">
          <SelectWithText
            optionsSelect={["", "nuevo", "usado"]}
            onChange={onChange}
            name="condition"
          />
        </div>
      </div>
      <div className="item__serial__label">
        Owner
        <div className="item__data__serial edit">
          <SelectWithText
            optionsSelect={["", "RF", "OR"]}
            onChange={onChange}
            name="owner"
          />
        </div>
      </div>
      <div className="item__serial__label">
        Location
        <div className="item__data__serial edit">
          <InputWithText onChange={onChange} name="location" />
        </div>
      </div>
      <div className="item__serial__label">
        Fabricante
        <div className="item__data__serial edit">
          <InputWithText onChange={onChange} name="purchase" />
        </div>
      </div>
      <div className="item__serial__label">
        Fecha de Compra
        <div className="item__data__serial edit">
          <InputWithText typeInput="date" onChange={onChange} name="purchase" />
        </div>
      </div>
      <div className="item__serial__label">
        i_max
        <div className="item__data__serial edit">
          <InputWithText typeInput="number" onChange={onChange} name="i_max" />
        </div>
      </div>
      <div className="item__serial__label">
        i_b
        <div className="item__data__serial edit">
          <InputWithText typeInput="number" onChange={onChange} name="i_b" />
        </div>
      </div>
      <div className="item__serial__label">
        i_n
        <div className="item__data__serial edit">
          <InputWithText typeInput="number" name="i_n" onChange={onChange} />
        </div>
      </div>
      <div className="item__serial__label">
        Sellos
        <div className="item__data__serial edit">
          <InputWithText onChange={onChange} typeInput="number" name="seals" />
        </div>
      </div>
      <div className="item__serial__label">
        ID
        <div className="item__data__serial edit">
          <OnlyReadField />
        </div>
      </div>
      <div className="item__serial__label">
        Creado en
        <div className="item__data__serial edit">
          <OnlyReadField />
        </div>
      </div>
      <div className="item__serial__label">
        Actualizado en
        <div className="item__data__serial edit">
          <OnlyReadField />
        </div>
      </div>
    </>
  );
};

export default FormAddProduct;
