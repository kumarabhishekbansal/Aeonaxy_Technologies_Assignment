import React from "react";
import Carrers from "./pages/Carrers";
import Interests from "./pages/Interests";
import ProgressBar from "./components/ProgressBar";
const App = () => {
  return (
    <section className=" overflow-hidden">
      <ProgressBar />
      <Interests />
    </section>
  );
};

export default App;
