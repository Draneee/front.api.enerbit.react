import React from "react";

function Pagination({
  currentPage,
  totalPages,
  handleNextPage,
  handlePreviousPage,
  handleChangeItemsPerPage,
}) {
  const options = [8, 16, 24, 32];

  return (
    <div className="container__navigation">
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
      <div className="container__pagination__item">
        <button
          className="btn__pagination previous"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        />
        <div className="container__items__page">
          <div>{currentPage}</div>
          <span>de</span>
          <div>{totalPages} </div>
        </div>

        <button
          className="btn__pagination next"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        />
      </div>
    </div>
  );
}

export default Pagination;
