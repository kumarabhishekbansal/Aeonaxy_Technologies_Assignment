import React from "react";
import Heading from "../components/Heading";
import Desc from "../components/Desc";
import { MathsData } from "../Data/MathsData";
import ComfortBox from "../components/ComfortBox";
import Button from "../components/Button";
const ComfortLevel = () => {
  return (
    <section className="flex-col flex justify-center items-center">
      <Heading title={"What is your math comfort level?"} />
      <Desc
        title={
          "Choose the highest level you feel confident in - you can always adjust later."
        }
      />
      <div className="flex-col md:flex-row flex justify-evenly gap-4 mt-10">
        {MathsData.length > 0 ? (
          <>
            {MathsData.map((val) => {
              return (
                <div
                  className="flex flex-col border-4 justify-center items-center cursor-pointer hover:bg-blue-500"
                  key={val.title}
                >
                  <ComfortBox
                    title={val.title}
                    desc={val.desc}
                    image={val.image}
                  />
                </div>
              );
            })}
          </>
        ) : (
          <>
            <h1>Loading.........</h1>
          </>
        )}
      </div>
      <div className="w-full text-center mt-10">
      <Button />
      </div>
      
    </section>
  );
};

export default ComfortLevel;
