import React from "react";
import Carrers from "./pages/Carrers";
import ProgressBar from "./components/ProgressBar";
const App = () => {
  return (
    <section className=" overflow-hidden">
      <ProgressBar />
      <Carrers />
    </section>
  );
};

export default App;
