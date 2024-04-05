import React, { useEffect } from "react";
import { FaCircleNotch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Loading = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/LearningPaths");
    }, 2000);
  });
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="mt-20">
        <FaCircleNotch style={{ color: "orange" }} className="size-40" />
      </div>
      <div className="mt-40 font-bold text-4xl md:text-5xl text-center">
        <h1>
          Finding Learning path recommendations for you based on your responses
        </h1>
      </div>
    </section>
  );
};

export default Loading;
