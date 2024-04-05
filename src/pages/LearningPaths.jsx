import React, { useState } from "react";
import Heading from "../components/Heading";
import Desc from "../components/Desc";
import { LearningPathsData } from "../Data/LearningPathData";
import LearningBox from "../components/LearningBox";

const LearningPaths = () => {
  const [selectlearnings,setSelectLearnings]=useState("");

  const handleClick=(title)=>{
    setSelectLearnings(title);
    localStorage.setItem("learnings",JSON.stringify(title))
  }
  return (
    <section className="h-3/5 flex-col items-center justify-center text-center gap-y-4">
      <Heading title={"Learnings Based on your answers"} />
      <Desc title={"Choose one to get started.You can switch anytime."} />
      {LearningPathsData.length > 0 ? (
        <div className="flex flex-col md:flex-row md:w-1/2 w-full m-auto gap-4 mt-10">
          {LearningPathsData.map((val) => {
            return (
              <div
                key={val.title}
                className={`w-1/2 border-2  items-center flex flex-wrap m-auto overflow-x-auto gap-x-4 mt-4 cursor-pointer hover:border-blue-600 active:bg-slate-500 ${val.title===selectlearnings?"bg-green-400":""}`}
                onClick={()=>handleClick(`${val.title}`)}
                
              >
                <LearningBox
                  title={val.title}
                  desc={val.desc}
                  image={val.image}
                  popular={val.popular}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <>
          <h1>Loading.....</h1>
        </>
      )}
    </section>
  );
};

export default LearningPaths;
