import React from "react";
import Carrers from "./pages/Carrers";
import Interests from "./pages/Interests";
import RightPlace from "./pages/RightPlace"
import ProgressBar from "./components/ProgressBar";
import ComfortLevel from "./pages/ComfortLevel";
const App = () => {
  return (
    <section className=" overflow-hidden">
      <ProgressBar />
      <ComfortLevel />
    </section>
  );
};

export default App;
