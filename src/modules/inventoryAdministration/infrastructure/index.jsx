import axios from "axios";
import { React, useEffect, useState } from "react";
import { AddProduct } from "../components/AddProduct";
import { ItemList } from "../components/ListItems";
import ItemsPerPageSelector from "../components/ItemsPerPageSelector";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import { SkeletonData } from "../components/SkeletonData";
import { Enerbitlogo2 } from "../shared/assets/images";
import { useAdminInventor } from "../shared/useAdminInventor";
import Modals from "../components/Modal";
import FormItem from "../components/FormItem";

const InventoryAdministration = () => {
  const {
    items,
    isLoading,
    itemsPerPage,
    searchValue,
    totalPages,
    currentPage,
    searchTerm,
    isDeleting,
    showModal,
    content,
    closeModal,
    handleDelete,
    handleChangeItemsPerPage,
    handleNextPage,
    handlePreviousPage,
    handleSearch,
    AddProductOnClick,
  } = useAdminInventor();

  return (
    <div className="card__layout inventory__Administration">
      <div className="container__inventory__administration">
        <div className="header__card__navigate">
          <div>
            <span className="header__text__path">Administracion</span>
            <span className="header__text__path">Inventario</span>
            <div className="header__container__name">
              <span className="header__item__name">
                Administracion de inventario
              </span>
            </div>
          </div>
          <div>
            <Enerbitlogo2 />
          </div>
        </div>
        <div className="filters__card__navigate">
          <div className="container__filters">
            <Search onChange={handleSearch} value={searchTerm} />
            <AddProduct onClick={AddProductOnClick} />
            <Modals
              headerName="Create"
              buttonName="Save"
              state={content}
              showModal={showModal}
              closeModal={closeModal}
            >
              <div className="sub__container__modal">
                <div className="container__items__serial">
                  <FormItem />
                </div>
                <div className="container__btn">
                  <button className="btn__functions save">Guardar</button>
                  <button className="btn__functions delete">Cancelar</button>
                </div>
              </div>
            </Modals>
          </div>
        </div>
        <div className="content__card__navigate">
          <div className="container__items">
            {isLoading ? (
              <>
                {items.slice(0, itemsPerPage).map(() => (
                  <SkeletonData />
                ))}
              </>
            ) : (
              <>
                {items.map((item) => (
                  <ItemList data={item} />
                ))}
              </>
            )}
          </div>
          <Pagination
            currentPage={currentPage + 1}
            totalPages={totalPages}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            handleChangeItemsPerPage={handleChangeItemsPerPage}
          />
        </div>
      </div>
    </div>
  );
};

export default InventoryAdministration;
