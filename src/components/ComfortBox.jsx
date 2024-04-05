import React from "react";

const ComfortBox = ({ title,desc, image }) => {
  return (
    <>
      <div>
        <img src={image} alt={title} />
      </div>
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        <h5>{desc}</h5>
      </div>
    </>
  );
};

export default ComfortBox;
