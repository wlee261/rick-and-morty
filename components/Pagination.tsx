import React, { Dispatch, SetStateAction, useState } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number | undefined;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const Pagination = ({
  currentPage,
  totalPages,
  setCurrentPage,
}: PaginationProps) => {
  if (!totalPages) {
    return <div>Loading...</div>;
  }
  //decide which page numbers should be shown in the pagination component
  const getShownPageNumbers = () => {
    if (currentPage > 2 && currentPage < totalPages - 1) {
      return [
        currentPage - 2,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        currentPage + 2,
      ];
    } else if (currentPage <= 2) {
      return [1, 2, 3, 4, 5];
    } else {
      return [
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }
  };
  return (
    <div className="flex my-6">
      <button
        className={`mx-2 ${currentPage === 1 ? "text-gray-300" : ""}`}
        onClick={() => {
          setCurrentPage(currentPage - 1);
        }}
        disabled={currentPage === 1}
      >
        {"<"}
      </button>
      {getShownPageNumbers().map((number) => {
        return (
          <button
            className={`flex justify-center items-center mx-1 w-7 ${
              number === currentPage
                ? "border rounded-md border-blue-500 text-blue-500"
                : ""
            }`}
            key={number}
            onClick={() => {
              setCurrentPage(number);
            }}
          >
            {number}
          </button>
        );
      })}
      <button
        className={`mx-2 ${currentPage === totalPages ? "text-gray-300" : ""}`}
        onClick={() => {
          setCurrentPage(currentPage + 1);
        }}
        disabled={currentPage === totalPages}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
