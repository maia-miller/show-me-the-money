import React from 'react'
import {connect} from 'react-redux'

// setTimer() {
//   setInterval(() => this.countTime(), 1000);
// }

//  countTime() {
  //   this.props.dispatch(secondTick())
  // }

function Meeting (props) {

  return <div className="container">

    <div className="MeetingButtons">
      <button class="button">End Meeting</button>
      <button class="button">Reset Meeting</button>
    </div>
  </div>
}

export default connect()(Meeting)
