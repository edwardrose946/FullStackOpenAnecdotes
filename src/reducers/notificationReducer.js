let timeoutID;

const notificationReducer = (state = {content: 'Initial Notification'}, action) => {
    switch (action.type) {
        // case 'VOTE_FOR_ANECDOTE': {
        //     return {...state, content: `Voted for ${action.data.content}`}
        // }
        // case 'NEW_ANECDOTE': {
        //     return {...state, content: `Created ${action.data.content}`}
        // }
        case 'SET_NOTIFICATION':
            return {...state, content: `${action.content}`}
        case 'REMOVE_NOTIFICATION': {
            return {...state, content: ''}
        }
        default:
            return state
    }
}

export const setNotification = (content, timeout = 5000) => {
    return async dispatch => {
        clearTimeout(timeoutID)
        await dispatch({
            type: 'SET_NOTIFICATION',
            content
        })
        timeoutID = setTimeout(() => dispatch({
            type: 'REMOVE_NOTIFICATION'
        }), timeout)
    }

}

export const removeNotification = () => {
    return {
        type: 'REMOVE_NOTIFICATION'
    }
}

export default notificationReducer