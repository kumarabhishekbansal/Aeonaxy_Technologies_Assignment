import React, { useState,useEffect } from "react";
import Heading from "../components/Heading";
import Desc from "../components/Desc";
import { carrerdata } from "../Data/CarrersData";
import CarrerBox from "../components/CarrerBox";
import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar"
const Carrers = () => {
  
  const [selectcarrer,setSelectCarrer]=useState("");
  const [wid, setWid] = useState("w-0");
  const handleClick=(title)=>{
    setSelectCarrer(title);
    localStorage.setItem("carrers",JSON.stringify(title))
  }

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
    <section className="h-3/5 flex-col items-center justify-center text-center gap-y-4">
      <ProgressBar pbar={wid} />
      <Heading title={"Which Describes you best?"} />
      <Desc title={"This will help us to personalize our expirence"} />
      {carrerdata.length > 0 ? (
        <>
          {carrerdata.map((val) => {
            return (
              <div
                key={val.title}
                className={`w-1/2 border-2  items-center flex flex-wrap m-auto overflow-x-auto gap-x-4 mt-4 cursor-pointer hover:border-blue-600 active:bg-slate-500 ${val.title===selectcarrer?"bg-sky-400":""}`}
                onClick={()=>handleClick(`${val.title}`)}
                
              >
                <CarrerBox title={val.title} image={val.image} />
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

export default Carrers;
