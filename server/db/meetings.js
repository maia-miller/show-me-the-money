const {getUserByName} = require('./users')

function saveMeeting(meeting, db) {
  return createMeeting(meeting, db)
  // .then((ids) => {
  //   console.log('ids: ', ids)
  //   meetingId= ids[0]
  //   // TODO: pass in attendeeList instead of empty array when all meeting attendees are login users
  //   return addAttendeesToMeeting(meetingId, [], db)
  // })
}

function createMeeting(meeting, db) {
  return db('meetings')
  .insert({meeting_name: meeting.meeting_name,
           cost: meeting.cost,
           time: meeting.time,
           duration: meeting.duration,
           attendees: meeting.attendeesList.length})
}

function addAttendeesToMeeting(meetingId, attendeesList, db) {
  let userAttendees = attendeesList.filter(person => person.id)
  return db('attendees')
  .insert({user_id: userAttendees.id, meeting_id: meetingId})
}

function getAttendees(meetingId, db) {
  return db('users')
  .join('attendees', 'users.id', '=', 'attendees.user_id')
  .where('attendees.meeting_id', meetingId)
  .select('users.user_name', 'users.first_name', 'users.last_name', 'users.hourly_wage')
}

function getUserMeetingHistory(req, db) {
  return getUserByName(req.user.user_name, db ).then(user => {
    return db('meetings')
    .join('attendees', 'meetings.id', '=', 'attendees.meeting_id')
    .where('attendees.user_id', user.id)
    .select('meetings.*')
  })
}


module.exports = {
  saveMeeting,
  getAttendees,
  getUserMeetingHistory
}
