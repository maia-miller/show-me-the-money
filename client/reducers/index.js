import {combineReducers} from 'redux'

import auth from './auth'
import meetings from './meetings'
import users from './users'
import profile from './profile'
import targetUser from './profile'

export default combineReducers({
  auth,
  meetings,
  users,
  profile,
  auth,
  targetUser
})
