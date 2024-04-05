import React, { useState } from "react";
import Heading from "../components/Heading";
import Desc from "../components/Desc";
import { Interestsdata } from "../Data/InterstsData";
import InterestsBox from "../components/InterestsBox";
import Button from "../components/Button";
const Interests = () => {
  const [selectinterest, setSelectInterest] = useState("");

  const handleClick = (title) => {
    setSelectInterest(title);
    localStorage.setItem("interest", JSON.stringify(title));
  };
  return (
    <section className="h-3/5 flex-col items-center justify-center text-center gap-y-4">
      <Heading title={"Which are you most interested in?"} />
      <Desc
        title={
          "Choose just one.This will help us get you started(but won't limit your experience)."
        }
      />
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
