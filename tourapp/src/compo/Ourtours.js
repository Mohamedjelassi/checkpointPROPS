import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../App.css";

const Ourtours = ({ Ourtour: { id, name, info, image, price },Delete }) => {
  const [text, setText] = useState("");






  const adddesc = () => {
    if (text === "") {
      setText(info);
    } else {
      setText("");
    }
  };
  return (
  
    <> 
      <article className="movie" id = "demo" >
        <img className="photo" src={image} alt="" />
        <h1>{name}</h1>
        <h4 style={{ color: "#617d98" }}>{price} $ </h4>
        <div>
        <Link to={`/tour/${name.split(" ").join('')}`}>
          <button> Read more </button>  
          </Link>
          <br></br> <br></br>
          <button onClick={()=>Delete(id)} > Delete Tour </button> 
          <br></br> <br></br>
          <button onClick={adddesc}> info </button>  
          <p className="p"> {text} </p>
        </div>

      </article>
    </>
     
  );
};

export default Ourtours;
