import React from "react";
import RightPlaceImage from "../assets/others/rightPlace.png";
import Heading from "../components/Heading";
import Desc from "../components/Desc";
import Button from "../components/Button";
const RightPlace = () => {
  return (
    <section className="h-4/5">
      <div className="flex md:flex-row flex-col justify-between">
        <div className="w-full md:w-1/2 flex justify-center md:flex-none">
          <img src={RightPlaceImage} alt="image1" />
        </div>
        <div className="flex flex-col justify-center items-center w-full md:w-1/2">
          <div>
            <Heading title={"You are in Right place"} />
          </div>
          <div className="w-1/2">
            <Desc
              title={
                "Brilliant gets you hands-on to improve your professional skills and knoweldge.You'll interact with concepts and solve,fun problems in maths,science,and computer science. "
              }
            />
          </div>
        </div>
      </div>
      <div className="text-center w-full">
        <Button />
      </div>
    </section>
  );
};

export default RightPlace;
