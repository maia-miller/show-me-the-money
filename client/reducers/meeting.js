let initialState = {
    inProgress: false,
    timeLog: []
}

function meeting(state = initialState, action) {
    switch (action.type) {
        case 'MEETING_STARTED':
            return {
                inProgress: true,
                timeLog: [new date()]
            }
        case 'MEETING_FINISHED':
            return {
                inProgress: false,
                timeLog: [...state.timeLog, new date()]
            }
        case 'MEETING_PAUSED':
            return {
                inProgress: false,
                timeLog: [...state.timeLog, new date()]
            }
        case 'MEETING_RESUMED':
            return {
                inProgress: true,
                timeLog: [...state.timeLog, new date()]
            }
        case 'MEETING_RESET':
            return {
                inProgress: false,
                timeLog: []
            }
        default:
            return state
    }
}

export default meeting