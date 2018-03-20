import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import PastMeeting from './PastMeeting'

import {getMeetings, postMeeting} from '../actions/meetings'
import {getUsers} from '../actions/users'

class History extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(getMeetings())
  }

  render() {
    const meetings = this.props.meetings
    return (
      <div className="container">
        <h2 className="title is-2">My Meeting History</h2>
        {meetings <1 ? 'Meeting History Loading' :
          <div>{meetings.map((meeting, i) => {
            return <p key={i}><Link to={`/history/${meeting.id}`}>{meeting.meeting_name}</Link></p>
        })}</div>}

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    meetings: state.meetings
  }
}

export default connect(mapStateToProps)(History)
