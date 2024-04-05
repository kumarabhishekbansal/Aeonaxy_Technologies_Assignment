import React from "react";

const CarrerBox = ({ title, image }) => {
  return (
    <>
      <div className="flex-2">
        <img src={image} alt={title} />
      </div>
      <div className="flex-4">
        <h3>{title}</h3>
      </div>
    </>
  );
};

export default CarrerBox;
