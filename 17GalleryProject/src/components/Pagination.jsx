import React from "react";

const Pagination = ({ index, setIndex}) => {
  return (
    <div className="flex justify-center items-center mt-5 gap-10">
      <button
        disabled={index === 1}
        onClick={() => {
          if (index > 1) {
            setIndex((prev) => prev - 1);
          }
        }}
        className={`h-10 w-20 rounded-xl font-semibold 
    ${
      index === 1
        ? "bg-yellow-600 cursor-not-allowed opacity-50"
        : "bg-yellow-600 active:scale-95"
    }`}
      >
        Prev
      </button>
      <h1 className="text-white">Page {index}</h1>
      <button
        onClick={() => {
          setIndex((prev) => prev + 1);
        }}
        className="bg-yellow-600 h-10 w-20 rounded-xl font-semibold active:scale-95"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
