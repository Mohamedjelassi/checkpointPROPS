  
import React from "react";
import "./App.css";
import Profile from "./profile/Profilecomponent";
const user = {
  name: "Jelassi",
  bio:
    "  ",
  profession: "i'm audio engineer and i will be a Web Developerr",
  src: "/32.jpg",
};

function App() {
  const handleName = () => alert(user.name);

  return (
    <div className="App">
      <Profile
        name={user.name}
        bio={user.bio}
        profession={user.profession}
        src={user.src}
        handleName={handleName}
      />
    </div>
  );
}
export default App;