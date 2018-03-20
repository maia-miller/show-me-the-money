import request from '../utils/api'

function receiveUsers (users) {
  return {
    type: 'RECEIVE_USERS',
    users
  }
}

function requestUsers (users) {
  return {
    type: 'REQUEST_USERS',
    users
  }
}

export function usersError(users) {
  return {
    type: 'MEETING_ERROR',
    users
  }
}

export function getUsers () {
  return function (dispatch) {
    dispatch(requestUsers())
    request('get', 'users')
    .then(res => {
      dispatch(receiveUsers(res.body))
    })
    .catch(err => dispatch(usersError(err.message)))
  }
}
