import React from 'react'
import { useDispatch, connect } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import {removeNotification, setNotification} from "../reducers/notificationReducer";

const NewAnecdote = (props) => {


    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        props.createAnecdote(content)
        props.setNotification(`Added ${content}`)
        //setTimeout(() => dispatch(removeNotification()), 5000)
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <input name={'anecdote'}/>
                <button type={'submit'}>add</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = {
    setNotification,
    createAnecdote
}

const mapStateToProps = (state) => {
    return state
}

const ConnectedNewAnecdote = connect(
    mapStateToProps,
    mapDispatchToProps
)(NewAnecdote)

export default ConnectedNewAnecdote