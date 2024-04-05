import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Carrers from "./pages/Carrers";
import Interests from "./pages/Interests";
import RightPlace from "./pages/RightPlace"
import ComfortLevel from "./pages/ComfortLevel";
import OnTheWay from "./pages/OnTheWay";
import Loading from "./pages/Loading";
import LearningPaths from "./pages/LearningPaths";
const App = () => {
  return (
    <section className=" overflow-hidden">
      <Router>
        <Routes>
          <Route exact path="/" element={<Carrers />} />
          <Route exact path="/interest" element={<Interests />} />
          <Route exact path="/RightPlace" element={<RightPlace />} />
          <Route exact path="/ComfortLevel" element={<ComfortLevel />} />
          <Route exact path="/OnTheWay" element={<OnTheWay />} />
          <Route exact path="/loading" element={<Loading />} />
          <Route exact path="/LearningPaths" element={<LearningPaths />} />
        </Routes>
      </Router>
    </section>
  );
};

export default App;
