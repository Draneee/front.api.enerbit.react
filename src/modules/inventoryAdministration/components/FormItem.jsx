import React from "react";
import InputWithText from "./InputWithText";
import { OnlyReadField } from "./OnlyReadField";
import SelectWithText from "./SelectWithText";

const FormItem = ({ data, onChange }) => {
  return (
    <>
      <div className="item__serial__label">
        Serial
        <div className="item__data__serial edit">
          <InputWithText
            typeInput={"text"}
            data={data["serial"]}
            onChange={onChange}
            name="serial"
          />
        </div>
      </div>
      <div className="item__serial__label">
        Tipo de conexion
        <div className="item__data__serial edit">
          <SelectWithText
            data={data["connection_type"]}
            onChange={onChange}
            name="connection_type"
            optionsSelect={["directa", "semi-directa", "indirecta"]}
          />
        </div>
      </div>
      <div className="item__serial__label">
        Sistema de Almacenamiento
        <div className="item__data__serial edit">
          <InputWithText
            data={data["storage_system"]}
            onChange={onChange}
            name="storage_system"
          />
        </div>
      </div>
      <div className="item__serial__label">
        Condicion
        <div className="item__data__serial edit">
          <SelectWithText
            data={data["condition"]}
            optionsSelect={["nuevo", "usado"]}
            onChange={onChange}
            name="condition"
          />
        </div>
      </div>
      <div className="item__serial__label">
        Owner
        <div className="item__data__serial edit">
          <SelectWithText
            data={data["owner"]}
            optionsSelect={["RF", "OR"]}
            onChange={onChange}
            name="owner"
          />
        </div>
      </div>
      <div className="item__serial__label">
        Location
        <div className="item__data__serial edit">
          <InputWithText
            data={data["location"]}
            onChange={onChange}
            name="location"
          />
        </div>
      </div>
      <div className="item__serial__label">
        Fabricante
        <div className="item__data__serial edit">
          <InputWithText data={data["manufacturer"]} onChange={onChange} />
        </div>
      </div>
      <div className="item__serial__label">
        Fecha de Compra
        <div className="item__data__serial edit">
          <InputWithText
            data={data["purchase"]}
            onChange={onChange}
            name="purchase"
          />
        </div>
      </div>
      <div className="item__serial__label">
        i_max
        <div className="item__data__serial edit">
          <InputWithText
            typeInput="number"
            data={data["i_max"]}
            onChange={onChange}
            name="i_max"
          />
        </div>
      </div>
      <div className="item__serial__label">
        i_b
        <div className="item__data__serial edit">
          <InputWithText
            typeInput="number"
            data={data["i_b"]}
            onChange={onChange}
            name="i_b"
          />
        </div>
      </div>
      <div className="item__serial__label">
        i_n
        <div className="item__data__serial edit">
          <InputWithText
            typeInput="number"
            data={data["i_n"]}
            name="i_n"
            onChange={onChange}
          />
        </div>
      </div>
      <div className="item__serial__label">
        Sellos
        <div className="item__data__serial edit">
          <InputWithText
            data={data["seals"]}
            onChange={onChange}
            typeInput="number"
            name="seals"
          />
        </div>
      </div>
      <div className="item__serial__label">
        ID
        <div className="item__data__serial edit">
          <OnlyReadField data={data["id"]} />
        </div>
      </div>
      <div className="item__serial__label">
        Creado en
        <div className="item__data__serial edit">
          <OnlyReadField data={data["created_at"]} />
        </div>
      </div>
      <div className="item__serial__label">
        Actualizado en
        <div className="item__data__serial edit">
          <OnlyReadField data={data["updated_at"]} />
        </div>
      </div>
    </>
  );
};

export default FormItem;
