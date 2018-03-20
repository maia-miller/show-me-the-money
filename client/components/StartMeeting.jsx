
import React from 'react'
import { connect } from 'react-redux'

import Meeting from './Meeting'
import CreateMeeting from './CreateMeeting'

import { startMeeting, secondTick } from '../actions/currentMeeting'

class StartMeeting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showMeeting: false,
      perSecWages: 0,
      showCreateMeeting: true
    }
    this.setPerSecWages = this.setPerSecWages.bind(this)
    this.setCostPerSec = this.setCostPerSec.bind(this)
  }

  setPerSecWages() {
    let wages = this.getWages(this.props.attendees)
    let combinedWages = wages.reduce((a, b) => a + b)
    let perSecondWages = (combinedWages / 60) / 60
    this.setCostPerSec(perSecondWages)
  }
  getWages(arr) {
    let wages = arr.map(cell => cell.wage)
    return wages
  }

  setCostPerSec(num) {
    this.setState({
      showMeeting: this.state.showMeeting,
      perSecWages: num })
    }

  render() {
    return (
      <div className="container">
        {this.state.showCreateMeeting && <CreateMeeting />}
        {this.state.showMeeting && <Meeting />}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    attendees: state.attendees,
    meetingName: meetingName
  }
}

export default connect()(StartMeeting)
