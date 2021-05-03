import React, { useState } from "react";
import "../App.css";

function TourInfo(props) {
  const tourFound = props.Otours.find(
    (Ourtour) =>
      Ourtour.name.split(" ").join("") ==
      props.match.params.name.split(" ").join("")
  );

  return (
    <article className="tourinfo">
      <img className="cophoto" src={tourFound.cover} alt="" />
      <div className="desc">
        <h1> {tourFound.name} </h1>
        <br></br>
        <h4>
          price :
          <span style={{ color: "#617d98" }}> ({tourFound.price}) $</span>
        </h4>
        
      </div>
      <div className="descc">
      <h2>
        
        <span style={{ color: "#617d98" }}> Description   </span>
      </h2>
        <p> {tourFound.info} </p>
      </div>
    </article>
  );
}

export default TourInfo;
