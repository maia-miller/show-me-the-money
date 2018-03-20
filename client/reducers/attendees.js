function attendees(state = [], action) {
    switch (action.type) {
        case 'ADD_ATTENDEE':
            return [...state, action.attendee]
        case 'REMOVE_ATTENDEE':
            return state.filter((attendee, i) => i !== action.index)
        case 'GET_ATTENDEES':
            return state
        default:
            return state
    }
}

export default attendees