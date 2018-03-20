import request from '../utils/api'

function receiveMeetings (meetings) {
  return {
    type: 'RECEIVE_MEETINGS',
    meetings
  }
}

function requestMeetings () {
  return {
    type: 'REQUEST_MEETINGS',
  }
}

function addMeeting (meeting) {
  return {
    type: 'ADD_MEETING',
    meeting
  }
}

function meetingError(meeting) {
  return {
    type: 'MEETING_ERROR',
    meeting
  }
}

export function getMeetings () {
  return function (dispatch) {
    dispatch(requestMeetings())
    request('get', 'meetings')
    .then(res => {
      dispatch(receiveMeetings(res.body))
    })
    .catch(err => dispatch(meetingError(err.message)))
  }
}

export function postMeeting () {
  return function (dispatch) {
    dispatch(addMeeting())
    request('post', 'meetings')
    .then(res => {
      console.log('res', res)
    })
    .catch(err => dispatch(meetingError(err.message)))
   }
}
