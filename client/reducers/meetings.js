function meetings(state = [], action) {
  switch (action.type) {
    case 'REQUEST_MEETINGS':
      return state

    case 'RECEIVE_MEETINGS':
      return [...action.meetings]

    default:
    return state
  }
}

export default meetings
