import React from "react";
import { useAdminInventor } from "../shared/useAdminInventor";
import { CheckGoodStatus } from "./CheckGoodStatus";
import { ContainerButtonsActions } from "./ContainerButtonsActions";
import FormItem from "./FormItem";
import InputWithText from "./InputWithText";
import Modals from "./Modal";
import { OnlyReadField } from "./OnlyReadField";
import SelectWithText from "./SelectWithText";

export const ItemList = ({ data }) => {
  const item__object__preview = [
    {
      key: 1,
      label: "Serial",
      get: "serial",
      element: <InputWithText data={data["serial"]} />,
    },
    {
      key: 2,
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
      key: 3,
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
      key: 4,
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
      key: 5,
      label: "Owner",
      get: "owner",
      element: (
        <SelectWithText data={data["owner"]} optionsSelect={["RF", "OR"]} />
      ),
    },
    {
      key: 6,
      label: "Location",
      get: "location",
      element: <InputWithText data={data["location"]} />,
    },
    {
      key: 7,
      label: "Fabricante",
      get: "manufacturer",
      element: <InputWithText data={data["manufacturer"]} />,
    },
    {
      key: 8,
      label: "Fecha de Compra",
      get: "purchase",
      element: <InputWithText data={data["purchase"]} />,
    },
    {
      key: 9,
      label: "i_max",
      get: "i_max",
      element: <InputWithText data={data["i_max"]} />,
    },
    {
      key: 10,
      label: "i_b",
      get: "i_b",
      element: <InputWithText data={data["i_b"]} />,
    },
    {
      key: 11,
      label: "i_n",
      get: "i_n",
      element: <InputWithText data={data["i_n"]} />,
    },
    {
      key: 12,
      label: "Sellos",
      get: "seals",
      element: <InputWithText data={data["seals"]} />,
    },
    {
      key: 13,
      label: "ID",
      get: "id",
      element: <InputWithText data={data["id"]} />,
    },
    {
      key: 14,
      label: "Creado en",
      get: "created_at",
      element: <OnlyReadField data={data["created_at"]} />,
    },
    {
      key: 15,
      label: "Actualizado en",
      get: "updated_at",
      element: <OnlyReadField data={data["updated_at"]} />,
    },
  ];

  const {
    showModal,
    content,
    isDeleting,
    dataPayload,
    isDeleted,
    isEdited,
    handleEditMeter,
    OnChangeNashe,
    handleDelete,
    viewOnClick,
    editOnClick,
    deleteOnClick,
    statusOnClick,
    closeModal,
  } = useAdminInventor();

  const handleSubmit = (e, id) => {
    e.preventDefault();
    handleEditMeter(id, dataPayload);
  };
  return (
    <>
      {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div className="item__object" onClick={statusOnClick}>
        {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <div className="container__serial" onClick={viewOnClick}>
          <span>Serial:</span>
          {data.serial === "" ? "No data serial" : data.serial}
        </div>
        <ContainerButtonsActions
          viewOnClick={viewOnClick}
          editOnClick={editOnClick}
          deleteOnClick={deleteOnClick}
        />
      </div>
      <Modals
        key={data.id}
        headerName="Create"
        buttonName="Save"
        showModal={showModal}
        closeModal={closeModal}
        state={content}
        view={viewOnClick}
      >
        {content === "Preview" && (
          <div className="sub__container__modal">
            <div className="container__items__serial">
              {item__object__preview.map((item) => (
                <div className="item__serial__label" key={item.key}>
                  {item.label}
                  <div className="item__data__serial view">
                    <span>
                      {data[item.get] === null ? "No data" : data[item.get]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <ContainerButtonsActions
              editOnClick={editOnClick}
              deleteOnClick={deleteOnClick}
            />
          </div>
        )}
        {content === "Edit" ? (
          <>
            {!isEdited ? (
              <form
                className={`sub__container__modal $`}
                onSubmit={(e) => handleSubmit(e, data["id"])}
              >
                <div className="container__items__serial">
                  <FormItem onChange={OnChangeNashe} data={data} />
                </div>
                <ContainerButtonsActions
                  viewOnClick={viewOnClick}
                  editOnClick={editOnClick}
                  deleteOnClick={deleteOnClick}
                  state={content}
                  showModal={showModal}
                />
              </form>
            ) : (
              <CheckGoodStatus status="edit" serial={data.serial} />
            )}
          </>
        ) : null}
        {content === "Delete" ? (
          <>
            {!isDeleted ? (
              <div className="sub__container__modal center">
                <div className="text__alert">
                  Estas seguro que quieres eliminar <br />
                  <span>El Item {data.serial} </span>
                </div>
                <ContainerButtonsActions
                  view={viewOnClick}
                  editOnClick={editOnClick}
                  deleteOnClick={deleteOnClick}
                  state={content}
                  showModal={showModal}
                  onClickDeleteItem={() => handleDelete(data.id)}
                  isDeleting={isDeleting}
                />
              </div>
            ) : (
              <CheckGoodStatus status="delete" serial={data.serial} />
            )}
          </>
        ) : null}
      </Modals>
    </>
  );
};
