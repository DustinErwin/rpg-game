import React from "react";
import charImage from "../../images/Attacking_000.png";
import "./character.css";

function Character() {
  return (
    <div>
      <img src={charImage} alt="Character" id="charOne"></img>
    </div>
  );
}

export default Character;
