import React from 'react'

const Dashboard = () => {
  return (
    <div className="columns">
      <div className="column">
        <figure className="image is-128x128">
          <img src="images/pie-graph.svg"></img>
        </figure>
        <a href="/#/history" className="button is-link is-rounded">My History</a>
      </div>

      <div className="column">
      <figure className="image is-128x128">
          <img src="images/pie-graph.svg"></img>
        </figure>
        <a href="/#/meeting" className="button is-link is-rounded">Start</a>
      </div>

      <div className="column">
        <figure className="image is-128x128">
          <img src="images/pie-graph.svg"></img>
        </figure>
        <a href="/#/profile" className="button is-link is-rounded">Profile</a>
      </div>
    </div>
  )
}

export default Dashboard
