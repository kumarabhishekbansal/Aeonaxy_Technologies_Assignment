import React from "react";
import Carrers from "./pages/Carrers";
import Interests from "./pages/Interests";
import RightPlace from "./pages/RightPlace"
import ProgressBar from "./components/ProgressBar";
import ComfortLevel from "./pages/ComfortLevel";
import OnTheWay from "./pages/OnTheWay";
const App = () => {
  return (
    <section className=" overflow-hidden">
      <ProgressBar />
      <OnTheWay />
    </section>
  );
};

export default App;
