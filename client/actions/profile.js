import request from '../utils/api'
import {usersError} from './users'

function receiveUser (targetUser) {
  console.log('user', targetUser)
  return {
    type: 'RECEIVE_USER',
    targetUser
  }
}

export function getUser(user_name) {
  return function (dispatch) {
    return request('get', 'users/profile', user_name)
    .then(res => {
      dispatch(receiveUser(res.body))
    })
    .catch(err => dispatch(usersError(err.message)))
  }
}
