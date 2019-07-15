import React from 'react'

function Buttons(props) {
    return (
        <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={()=>{props.setLionsScore(props.lionsScore + 7)}}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={()=>{props.setLionsScore(props.lionsScore + 3)}}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={()=>{props.setTigersScore(props.tigersScore + 7)}}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={()=>{props.setTigersScore(props.tigersScore + 3)}}>Away Field Goal</button>
        </div>
      </section>
    )
}

export default Buttons
