import React from "react";
import { FaCircleNotch } from "react-icons/fa";
const Loading = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <div>
        <FaCircleNotch style={{ color: "orange" }} className="size-40" />
      </div>
      <div className="mt-40 font-bold text-xl text-center">
        <h1>
          Finding Learning path recommendations for you based on your responses
        </h1>
      </div>
    </section>
  );
};

export default Loading;
