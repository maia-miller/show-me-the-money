import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

function PastMeeting ({meeting}) {
  return <div>
    <h2>Past Meeting</h2>
    <div>
      <p>Name: {meeting.meeting_name}</p>
      <p>Time: {meeting.time}</p>
      <p>Cost: ${meeting.cost}</p>
      <p>Attendees: {meeting.attendees}</p>
    </div>
  </div>
}

const mapStateToProps = ({meetings}, props) => ({
    meeting: meetings.find(meeting => meeting.id == props.match.params.id)
})


export default connect(mapStateToProps)(PastMeeting)
