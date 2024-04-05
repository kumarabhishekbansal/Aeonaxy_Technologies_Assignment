import React, { useState, useEffect } from "react";
import Heading from "../components/Heading";
import Desc from "../components/Desc";
import { MathsData } from "../Data/MathsData";
import ComfortBox from "../components/ComfortBox";
import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar";
const ComfortLevel = () => {
  const [selectcomfort, setSelectComfort] = useState("");
  const [wid, setWid] = useState("w-0");
  const handleClick = (title) => {
    // console.log("clicked");
    // console.log(title);
    setSelectComfort(title);
    localStorage.setItem("comfort", JSON.stringify(title));
  };
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
    <section className="h-4/5 flex-col flex justify-center items-center">
      <div className="w-full">
      <ProgressBar pbar={wid} />
      </div>
      
      <div className="text-3xl md:text-4xl mt-10 text-center p-10">
        <Heading title={"What is your math comfort level?"} />
      </div>

      <div>
        <Desc
          title={
            "Choose the highest level you feel confident in - you can always adjust later."
          }
        />
      </div>

      <div className="flex-col md:flex-row flex justify-evenly gap-4 mt-10">
        {MathsData.length > 0 ? (
          <>
            {MathsData.map((val) => {
              return (
                <div
                  key={val.title}
                  className={`flex flex-col border-4 justify-center items-center cursor-pointer hover:bg-slate-200 active:bg-slate-500 ${
                    val.title === selectcomfort ? "bg-sky-400" : ""
                  }`}
                  onClick={() => handleClick(`${val.title}`)}
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
