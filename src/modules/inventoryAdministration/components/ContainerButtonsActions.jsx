import React from "react";

export const ContainerButtonsActions = ({
  state,
  onClickDeleteItem,
  viewOnClick,
  editOnClick,
  deleteOnClick,
  showModal,
}) => {
  return (
    <div className="container__btn">
      {state === "Delete" ? (
        <>
          <button className="btn yes" onClick={onClickDeleteItem}>
            Si
          </button>
          <button className="btn no">No</button>
        </>
      ) : (
        <>
          {showModal ? (
            <>
              <button type="submit" className="btn__functions save">
                Guardar
              </button>
              <button className="btn__functions delete" onClick={viewOnClick}>
                Cancelar
              </button>
            </>
          ) : (
            <>
              <button
                onClick={editOnClick}
                className="btn__functions editOnClick"
              >
                Editar
              </button>
              <button onClick={deleteOnClick} className="btn__functions delete">
                Eliminar
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
};
