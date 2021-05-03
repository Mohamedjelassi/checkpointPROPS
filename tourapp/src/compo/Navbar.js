import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbars = ({ setNameSearch }) => {
  return (
    <div className="sticky ">
      <header>
        <h1>Tours</h1>
        <ul class="navmenu">
          <Link to="/home">
            <li> Home</li>
          </Link>
          <Link to="/Ourtours">
            <li> Our Tours</li>
          </Link>
          <Link to="/AddTours">
            <li> Add New Tour</li>
          </Link>
        </ul>
        <input
          type="text"
          placeholder="Search . . ."
          className="mr-sm-2"
          onChange={(e) => setNameSearch(e.target.value)}
        ></input>
      </header>
    </div>
  );
};

export default Navbars;
