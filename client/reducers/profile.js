
const initialState = {
  targetUser: null
}

function profile( state = [], action) {
    switch (action.type) {
        case 'RECEIVE_USER':
            return [...state, action.targetUser]

        default:
            return state
    }
}

export default profile
