
function addAttendee (attendee) {
  return {
    type:'ADD_ATTENDEE',
    attendee
  }
}

function removeAttendee (i) {
  return {
    type:'REMOVE_ATTENDEE',
    i
  }
}

export function getAttendees() {
  return {
    type:'GET_ATTENDEES'
  }
}
