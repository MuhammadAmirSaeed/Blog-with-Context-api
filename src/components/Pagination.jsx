import React from "react";
import { useContext } from "react";
import { AppContext } from "../Context/appContext";

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);
  return (
    <div className="fixed bottom-0 flex items-center justify-center w-full py-3 bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border">
      <div className="w-11/12 max-w-[580px] justify-between flex flex-row ">
        <div className="flex gap-x-2">
          {page > 1 && (
            <button
              className="px-2 py-1 text-sm border rounded-md shadow-md"
              onClick={() => handlePageChange(page - 1)}
            >
              Previous
            </button>
          )}
          {page < totalPages && (
            <button
              className="px-2 py-1 text-sm border rounded-md shadow-md"
              onClick={() => handlePageChange(page + 1)}
            >
              Next{" "}
            </button>
          )}
        </div>
        <p className="text-sm font-bold">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
