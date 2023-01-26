import React from "react";
import { useAdminInventor } from "../shared/useAdminInventor";
import { ContainerButtonsActions } from "./ContainerButtonsActions";
import InputWithText from "./InputWithText";
import { OnlyReadField } from "./OnlyReadField";
import SelectWithText from "./SelectWithText";

export const TryEdit = ({ data }) => {
  const item__object = [
    {
      label: "Serial",
      get: "serial",
      element: <InputWithText data={data["serial"]} />,
    },
    {
      label: "Tipo de conexion",
      get: "connection_type",
      element: (
        <SelectWithText
          data={data["connection_type"]}
          optionsSelect={["directa", "semi-directa", "indirecta"]}
        />
      ),
    },
    {
      label: "storage_system",
      get: "storage_system",
      element: (
        <SelectWithText
          data={data["storage_system"]}
          optionsSelect={["interno", "externo"]}
        />
      ),
    },
    {
      label: "Condicion",
      get: "condition",
      element: (
        <SelectWithText
          data={data["condition"]}
          optionsSelect={["nuevo", "usado"]}
        />
      ),
    },
    {
      label: "Owner",
      get: "owner",
      element: (
        <SelectWithText data={data["owner"]} optionsSelect={["RF", "OR"]} />
      ),
    },
    {
      label: "Location",
      get: "location",
      element: <InputWithText data={data["location"]} />,
    },
    {
      label: "Fabricante",
      get: "manufacturer",
      element: <InputWithText data={data["manufacturer"]} />,
    },
    {
      label: "Fecha de Compra",
      get: "purchase",
      element: <InputWithText data={data["purchase"]} />,
    },
    {
      label: "i_max",
      get: "i_max",
      element: <InputWithText data={data["i_max"]} />,
    },
    {
      label: "i_b",
      get: "i_b",
      element: <InputWithText data={data["i_b"]} />,
    },
    {
      label: "i_n",
      get: "i_n",
      element: <InputWithText data={data["i_n"]} />,
    },
    {
      label: "Sellos",
      get: "seals",
      element: <InputWithText data={data["seals"]} />,
    },
    {
      label: "ID",
      get: "id",
      element: <InputWithText data={data["id"]} />,
    },
    {
      label: "Creado en",
      get: "created_at",
      element: <OnlyReadField data={data["created_at"]} />,
    },
    {
      label: "Actualizado en",
      get: "updated_at",
      element: <OnlyReadField data={data["updated_at"]} />,
    },
  ];
  const {
    showModal,
    content,
    AddProductOnClick,
    viewOnClick,
    editOnClick,
    deleteOnClick,
    statusOnClick,
    closeModal,
  } = useAdminInventor();
  return (
    <div className="sub__container__modal">
      <div className="container__items__serial">
        {item__object.map((item) => (
          <div className="item__serial__label">
            {item.label}
            <div
              className={`item__data__serial ${content === "Edit" && "edit"}`}
            >
              {item.element}
            </div>
          </div>
        ))}
      </div>
      <ContainerButtonsActions
        viewOnClick={viewOnClick}
        editOnClick={editOnClick}
        deleteOnClick={deleteOnClick}
        state={content}
        showModal={showModal}
      />
    </div>
  );
};
