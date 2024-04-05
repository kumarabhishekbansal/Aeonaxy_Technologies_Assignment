import React from "react";
import Carrers from "./pages/Carrers";
import Interests from "./pages/Interests";
import RightPlace from "./pages/RightPlace"
import ProgressBar from "./components/ProgressBar";
const App = () => {
  return (
    <section className=" overflow-hidden">
      <ProgressBar />
      <RightPlace />
    </section>
  );
};

export default App;
