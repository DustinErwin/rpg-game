import React from "react";
import Character from "../Character/character";
import "./battlefieldTemplate.css";

function BattlefieldTemplate() {
  return (
    <div id="view">
      <div className="partyOne">
        <Character></Character>
      </div>
      <div className="partyTwo">
        <Character></Character>
      </div>
      <div className="partyThree">
        <Character></Character>
      </div>
      <div className="enemyOne"></div>
      <div className="enemyTwo"></div>
      <div className="enemyThree"></div>
    </div>
  );
}

export default BattlefieldTemplate;
