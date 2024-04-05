import React from "react";
import onTheWay from "../assets/others/ontheway.png";
import Heading from "../components/Heading";
import Desc from "../components/Desc";
import Button from "../components/Button";
import { AiFillStar } from "react-icons/ai";
const OnTheWay = () => {
  return (
    <section className="h-4/5">
      <div className="flex md:flex-row flex-col justify-between">
        <div className="w-full md:w-1/2 flex justify-center md:flex-none">
          <img src={onTheWay} alt="image1" />
        </div>
        <div className="flex flex-col justify-center items-center w-full md:w-1/2">
          <div className="text-xl text-left">
            <Heading title={"You are on the way !!"} />
            <div className="flex text-xl">
              <AiFillStar style={{ color: "yellow" }} />
              <AiFillStar style={{ color: "yellow" }} />
              <AiFillStar style={{ color: "yellow" }} />
              <AiFillStar style={{ color: "yellow" }} />
              <AiFillStar style={{ color: "yellow" }} />
            </div>
          </div>
          <div className="w-1/2">
            <Desc
              title={
                "Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations."
              }
            />
          </div>
          <div className="font-bold text-left">
            <h3>-Jacob s</h3>
          </div>
        </div>
      </div>
      <div className="text-center w-full">
        <Button />
      </div>
    </section>
  );
};

export default OnTheWay;
