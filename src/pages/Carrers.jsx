import React from "react";
import Heading from "../components/Heading";
import Desc from "../components/Desc";
import { carrerdata } from "../Data/CarrersData";
import CarrerBox from "../components/CarrerBox";
const Carrers = () => {
  return (
    <section className="h-3/5 flex-col items-center justify-center text-center gap-y-4">
      <Heading title={"Which Describes you best?"} />
      <Desc title={"This will help us to personalize our expirence"} />
      {carrerdata.length > 0 ? (
        <>
          {carrerdata.map((val) => {
            return (
              <div
                key={val.title}
                className="w-1/2 border-2  items-center flex flex-wrap m-auto overflow-x-auto gap-x-4 mt-4 cursor-pointer hover:border-blue-600"
              >
                <CarrerBox title={val.title} image={val.image} />
              </div>
            );
          })}
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