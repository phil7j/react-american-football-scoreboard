import React from 'react'

function TopRow(props) {
    return (
        <div>
           <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>
           <div className="home__score">{props.lionsScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{props.tigersScore}</div>
          </div>
        </div>
        </div>
    )
}

export default TopRow
