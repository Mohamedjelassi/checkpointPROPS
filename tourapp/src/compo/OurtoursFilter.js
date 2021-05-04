import React from "react";
import Ourtours from "./Ourtours";

import "../App.css";


const OurtoursFilter = ({ Otours, nameSearch,toursLength,Delete }) => {

 

  const show =()=>toursLength(Otours)===0
  {console.log(show())}
  

  const handelClick = () => {
    window.location.reload(false);
  };

 
  return (
    <div className="Content">
      <h1 className="h1"> Our Tours </h1>

      {show() && <button className="btnH" onClick={handelClick}> Refresh </button> } 

      <div className="Moviecard">
        {Otours.filter((el) =>
          el.name.toLowerCase().includes(nameSearch.toLowerCase().trim())
        ).map((el, i) => (
          <Ourtours key={i} Ourtour={el} Otours={Otours} Delete={Delete}/>
          
        ))}
      </div>
    </div>
  );
};

export default OurtoursFilter;
