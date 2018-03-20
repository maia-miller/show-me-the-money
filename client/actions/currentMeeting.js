
function startMeeting (attendees, meetingName, wages) {
  return {
    type: 'START_MEETING',
    attendees,
    meetingName,
    wages
  }
}

function endMeeting () {
  return {
    type: 'END_MEETING'
  }
}

function secondTick () {
  return {
    type: 'TICK_ONE_SECOND'
  }
}

function resetMeeting () {
  return {
    type: 'RESET_MEETING'
  }
}