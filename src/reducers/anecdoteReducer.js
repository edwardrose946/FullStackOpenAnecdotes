import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch (action.type) {
    case 'VOTE_FOR_ANECDOTE': {
      // const id = action.id
      // const anecdoteToChange = state.find(anecdote => anecdote.id === id)
      // const changedAnecdote = {...anecdoteToChange, votes: anecdoteToChange.votes + 1}
      return state.map(anecdote => anecdote.id === action.data.id ? action.data : anecdote)
    }
    case 'NEW_ANECDOTE': {
      return [...state, action.data]
    }
    case 'INIT_ANECDOTES':
      return action.data

    default:
      return state
  }
}

export const voteForAnecdote = (anecdote) => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.vote(anecdote)
    dispatch({
      type: 'VOTE_FOR_ANECDOTE',
      data: updatedAnecdote
    })
  }
}



// export const createAnecdote = (content) => {
//   return {
//     type: 'NEW_ANECDOTE',
//     data: content
//   }
// }

export const createAnecdote = content => {
  return async dispatch => {
    const newNote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newNote
    })
  }
}

// export const initializeAnecdotes = (anecdotes) => {
//   return {
//     type: 'INIT_ANECDOTES',
//     data: anecdotes
//   }
// }

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export default anecdoteReducer