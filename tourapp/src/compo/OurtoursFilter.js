import React from "react";
import Ourtours from "./Ourtours";
import "../App.css";
import { Link } from "react-router-dom";

const OurtoursFilter = ({ Otours, nameSearch }) => {


  const handelClick = () => {
    return (<div> <Ourtours /></div>);
  };

  {console.log()}
  return (
    <div className="Content">
      <h1 className="h1"> Our Tours </h1>

      <button className="btnH" onClick={handelClick}> Refresh </button>

      <div className="Moviecard">
        {Otours.filter((el) =>
          el.name.toLowerCase().includes(nameSearch.toLowerCase().trim())
        ).map((el, i) => (
          <Ourtours key={i} Ourtour={el} Otours={Otours}/>
          
        ))}
      </div>
    </div>
  );
};

export default OurtoursFilter;
