import React, { useState } from "react";
import { Link } from "react-router-dom";


import "../App.css";





const AddTours = ({ addNewTour }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [info, setInfo] = useState("");

  const handleSubmit = (e) => {
    let NewTour = {
      name,
      image,
      price,
      info,
    };
    addNewTour(e , NewTour);
    setName("");
    setImage("");
    setPrice("");
    setInfo("");
  };

  return (
    
    <div className="Formcontainer">
      <h1 className="addTour-h1">Add A Tour</h1>
      <form>
        <div class="row">
          <div class="col-25">
            <label>Tour Name</label>
          </div>
          <div class="col-75">
            <input
              type="text"
              Name="Name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label>Image</label>
          </div>
          <div class="col-75">
            <input
              type="text"
              Name="Image"
              value={image}
              required
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label> Price</label>
          </div>
          <div class="col-75">
            <input
              type="url"
              Name="price"
              value={price}
              required
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label>Tour Info</label>
          </div>
          <textarea
            id="subject"
            Name="subject"
            placeholder="Write something.."
            type="text"
            Name="info"
            value={info}
            required
            onChange={(e) => setInfo(e.target.value)}
          />
        </div>
      <button className="Modal-btn" onClick={handleSubmit}>
        Submit
      </button>
      </form>
    </div>
  
  );
};

export default AddTours;
