import React, { useState } from "react";
import "./App.css";
import Navbar from "./compo/Navbar";
import Home from "./compo/home";
import { Datatour } from "./compo/datatour";
import OurtoursFilter from "./compo/OurtoursFilter";
import AddTours from "./compo/AddTours";
import TourInfo from "./compo/tourInfo";
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  const [Otours, setOtours] = useState(Datatour);
  const [nameSearch, setNameSearch] = useState("");

  const addNewTour = (e, NewTour) => {
    // e.preventDefault();
    setOtours([...Otours, NewTour]);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar setNameSearch={setNameSearch} />

        <Link to="/home">
          <button className="btnH"> Home </button>
        </Link>

        <Route
          path="/home"
          render={() => (
            <>
              <Home />
            </>
          )}
          target="_blank"
        />
        <Route
          path="/AddTours"
          render={() => (
            <>
              <AddTours addNewTour={addNewTour} />
            </>
          )}
          target="_blank"
        />

        <Route
          path="/Ourtours"
          render={() => (
            <>
              <OurtoursFilter Otours={Otours} nameSearch={nameSearch} />
            </>
          )}
          target="_blank"
        />

        <Route
          path="/tour/:name"
          render={(props) => <TourInfo {...props} Otours={Otours} />}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
