import React from "react";

import bgImage from "../../images/game_background_3.png";
import "./background.css";
/* Takes three Props 
1. styleClass: use btn-red or btn-dark. You can also add new css classes, but do not alter the current ones. 
2. handleClick: attatch to any btnClick event
3. props.children allows us to enter text between tags as normal when making buttons*/

function Background() {
  return (
    <div>
      <img src={bgImage} alt="background" id="bg"></img>
    </div>
  );
}

export default Background;
