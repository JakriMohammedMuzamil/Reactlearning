import React from "react";
import Card from "./Card";

const Gallery = ({ userData ,loading }) => {
  if (loading) {
    return(
    <div className="w-full h-full flex justify-center items-center">
      <h3 className="text-gray-400">Loading...</h3>
    </div>
  );}

  return (
    <div className="overflow-auto no-scrollbar text-white flex flex-1 flex-wrap items-center justify-center gap-4 mx-4 py-4">
      {userData.map((elem) => (
        <Card key={elem.id} elem={elem} />
      ))}
    </div>
  );
};

export default Gallery;
