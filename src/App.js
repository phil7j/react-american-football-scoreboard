//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import Buttons from './Buttons';
import TopRow from './TopRow';
function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.
  //  You'll need one for the home score and another for the away score.
  const [lionsScore, setLionsScore] = useState(0);
  const [tigersScore, setTigersScore] = useState(0);
  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow lionsScore={lionsScore} tigersScore={tigersScore} />
        <BottomRow />
      </section>
      <Buttons lionsScore={lionsScore} tigersScore={tigersScore} setLionsScore={setLionsScore} setTigersScore={setTigersScore} />
    </div>
  );
}

export default App;
