import React from "react";

const LearningBox = ({ title, desc, image, popular }) => {
  return (
    <>
      <div>
        <h3>
          <span className="font-bold">{title} </span>
          {desc}
        </h3>
      </div>

      <div>
        <img src={image} alt={title} />
      </div>
      <div>
        {popular === true ? (
          <h3 className="border-4 border-yellow-600 p-2 rounded-lg text-white bg-orange-400">Popular</h3>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default LearningBox;
