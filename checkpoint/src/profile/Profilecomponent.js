import React from "react";
import img from "./32.JPG"
import PropTypes from "prop-types";

function Profile(props) {
  return (
    <div
      style={{
        
        marginTop: "-50px",
        textAlign: "center",
        backgroundColor: "#2980B9",
        height: "100vh",
      }}
    >
      <h1 style={{  
         position: 'absolute',
         top  : '40px',
         left : '650px',
        fontStyle: "bold", color: "#2E4053", marginTop: "50px" }}>
        Greetings just call me {props.name}!
      </h1>
      <h2 style={{
         position: 'absolute',
         top  : '150px',
         left : '700px',
        color: "#2E4053", margin: "50px" }}>
        About me: {props.bio}.
      </h2>

      <h2 style={{ 
        
        position: 'absolute',
         top  : '350px',
         left : '500px',
        color: "#2E4053", margin: "50px" }}>
        What i do ?? {props.profession}.
      </h2>
      <div>
        <img
          style={{
            position: 'absolute',
            top: '40px',
             left: '300px',
            marginTop: "50px",
            height: "250px",
            width: "250px",
            borderRadius: "50%",
          }}
          src={img}
          alt=""
        />
      </div>
      <br />
      <button
        style={{

          position: 'absolute',
         top  : '650px',
         left : '800px',
          backgroundColor: "#2E4053",
          color: "#F7ECE1",
          borderRadius: "5px",
          border: "none",
          padding: "10px",
        }}
        onClick={() => props.handleName()}
      >
        Click me!
      </button>
    </div>
  );
}
export default Profile;

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    src: PropTypes.string,
  }),
  handleName: PropTypes.func,
};

Profile.defaultProps = {
  name: "Undifiend",
  bio: "Lorem Ipsem ???",
  profession: "N/A",
};