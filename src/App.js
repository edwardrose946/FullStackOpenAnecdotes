import React, {useEffect} from 'react'
import NewAnecdote from './components/NewAnecdote'
import Anecdotes from "./components/AnecdoteList";
import Notification from "./components/Notification";
import Filter from "./components/Filter";
import {useDispatch} from "react-redux";
import anecdoteService from './services/anecdotes'
import { initializeAnecdotes } from "./reducers/anecdoteReducer";

const App = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeAnecdotes())
    }, [dispatch])

    return (
    <div>
        <Filter/>
        <Notification />
        <Anecdotes />
        <NewAnecdote />
    </div>
  )
}

export default App