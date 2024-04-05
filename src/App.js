import React from "react";
import Carrers from "./pages/Carrers";
import Interests from "./pages/Interests";
import RightPlace from "./pages/RightPlace"
import ProgressBar from "./components/ProgressBar";
import ComfortLevel from "./pages/ComfortLevel";
import OnTheWay from "./pages/OnTheWay";
import Loading from "./pages/Loading";
import LearningPaths from "./pages/LearningPaths";
const App = () => {
  return (
    <section className=" overflow-hidden">
      <ProgressBar />
      <LearningPaths />
    </section>
  );
};

export default App;
