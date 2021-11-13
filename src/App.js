// import GameStateContext from "./contexts/gameState/gameStateContext";
// import { useEffect, useState } from "react";
import "./App.css";
import Background from "./components/Background/background.js";
import BattlefieldTemplate from "./components/BattlefieldTemplate/battlefieldTemplate.js";
import Character from "./components/Character/character";

function App() {
  // const [gameState, setGameState] = useState({
  //   background: "",
  //   music: "",
  //   difficulty: "",
  //   stage: "",
  // });

  //Add Character Select

  // useEffect(() => {
  //   setGameState({
  //     ...gameState,
  //     background: newBackground,
  //     music: newMusic,
  //     difficulty: "",
  //     stage: "",
  //   });
  // }, [gameState.stage]);

  return (
    <div className="App" id="app">
      <header className="App-header"></header>
      <Background></Background>

      <BattlefieldTemplate></BattlefieldTemplate>
    </div>
  );
}

export default App;
