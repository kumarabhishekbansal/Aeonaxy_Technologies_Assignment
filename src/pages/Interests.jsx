import React, { useState, useEffect } from "react";
import Heading from "../components/Heading";
import Desc from "../components/Desc";
import { Interestsdata } from "../Data/InterstsData";
import InterestsBox from "../components/InterestsBox";
import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar";
import {useNavigate} from "react-router-dom"
const Interests = () => {
  const navigate=useNavigate();
  const [selectinterest, setSelectInterest] = useState("");
  const [wid, setWid] = useState("w-0");
  const handleClick = (title) => {
    setSelectInterest(title);
    localStorage.setItem("interest", JSON.stringify(title));
  };
  useEffect(() => {
    const carrers = JSON.parse(localStorage.getItem("carrers") || null);
    const interest = JSON.parse(localStorage.getItem("interest") || null);
    const rightplace = JSON.parse(localStorage.getItem("rightplace") || null);
    const comfort = JSON.parse(localStorage.getItem("comfort") || null);
    const ontheway = JSON.parse(localStorage.getItem("ontheway") || null);
    if(!carrers)
    {
      window.alert("please enter you carrer first!")
      navigate("/");
    }
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
    <section className="h-3/5 flex-col items-center justify-center text-center gap-y-4">
      <ProgressBar pbar={wid} />
      <div className="text-3xl md:text-4xl text-center mt-10 p-10">
        <Heading title={"Which are you most interested in?"} />
      </div>

      <div>
        <Desc
          title={
            "Choose just one.This will help us get you started(but won't limit your experience)."
          }
        />
      </div>

      {Interestsdata.length > 0 ? (
        <>
          {Interestsdata.map((val) => {
            return (
              <div
                key={val.title}
                className={`w-1/2 border-2  items-center flex flex-wrap m-auto overflow-x-auto gap-x-4 mt-4 cursor-pointer hover:border-blue-600 active:bg-slate-500 ${
                  val.title === selectinterest ? "bg-sky-400" : ""
                }`}
                onClick={() => handleClick(`${val.title}`)}
              >
                <InterestsBox title={val.title} image={val.image} />
              </div>
            );
          })}
          <Button />
        </>
      ) : (
        <>
          <h1>Loading.....</h1>
        </>
      )}
    </section>
  );
};

export default Interests;
