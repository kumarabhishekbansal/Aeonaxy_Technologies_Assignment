import React, { useState, useEffect } from "react";
import RightPlaceImage from "../assets/others/rightPlace.png";
import Heading from "../components/Heading";
import Desc from "../components/Desc";
import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar"
const RightPlace = () => {
  const [wid, setWid] = useState("w-0");
  useEffect(() => {
    const carrers = JSON.parse(localStorage.getItem("carrers") || null);
    const interest = JSON.parse(localStorage.getItem("interest") || null);
    const rightplace = JSON.parse(localStorage.getItem("rightplace") || null);
    const comfort = JSON.parse(localStorage.getItem("comfort") || null);
    const ontheway = JSON.parse(localStorage.getItem("ontheway") || null);
    if (carrers) {
      setWid("w-1/5");
    }
    if (interest) {
      setWid("w-2/5");
    }
    if (rightplace) {
      setWid("w-3/5");
    }
    if (comfort) {
      setWid("w-4/5");
    }
    if (ontheway) {
      setWid("w-5/5");
    }
  }, [wid]);
  return (
    <section className="h-4/5">
      <ProgressBar pbar={wid} />
      <div className="flex md:flex-row flex-col justify-between">
        <div className="w-full md:w-1/2 flex justify-center md:flex-none">
          <img src={RightPlaceImage} alt="image1" />
        </div>
        <div className="flex flex-col justify-center items-center w-full md:w-1/2">
          <div className="text-3xl md:text-5xl p-10 text-center">
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
