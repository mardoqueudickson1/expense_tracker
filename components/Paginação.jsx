import React from 'react';
import ReactPaginate from 'react-paginate';

function Pagination({ pageCount, onPageChange }) {
  return (
    <ReactPaginate
      previousLabel={<span className="sr-only">Anterior</span>}
      nextLabel={<span className="sr-only">Próximo</span>}
      breakLabel="..."
      breakClassName="break-me"
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={onPageChange}
      containerClassName="pagination"
      activeClassName="active"
      pageClassName="relative inline-block px-3 py-1 bg-white border border-gray-300 text-gray-500 hover:text-blue-500 cursor-pointer"
      previousClassName="relative inline-block px-3 py-1 bg-white border border-gray-300 text-gray-500 hover:text-blue-500 cursor-pointer"
      nextClassName="relative inline-block px-3 py-1 bg-white border border-gray-300 text-gray-500 hover:text-blue-500 cursor-pointer"
      disabledClassName="opacity-50 cursor-not-allowed"
    />
  );
}

export default Pagination;
