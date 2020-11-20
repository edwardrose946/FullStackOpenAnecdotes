import React from 'react'
import { useDispatch, useSelector, connect } from "react-redux";
import { voteForAnecdote } from "../reducers/anecdoteReducer";
import {removeNotification, setNotification} from "../reducers/notificationReducer";

const Anecdote = ({ anecdote, handleClick }) => {
    return (
        <div>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={handleClick}>vote</button>
            </div>
        </div>
    )
}

const Anecdotes = (props) => {
    const anecdotes = props.anecdotes


    return (
        <div>
            <h2>anecdotes</h2>
            {anecdotes
                .sort((o1, o2) => o2.votes - o1.votes)
                .map(anecdote => <Anecdote key={anecdote.id} anecdote={anecdote}
                    handleClick={() => {
                        props.voteForAnecdote(anecdote)
                        props.setNotification(`Voted for ${anecdote.content}`)
                    }}
                    />
                )}
        </div>
    )
}

const mapDispatchToProps = {
    voteForAnecdote,
    setNotification
}

const mapStateToProps = (state) => {
    const filter = state.filter
    return {
        anecdotes: state
            .anecdotes
            .filter(anecdote => anecdote
                .content
                .toLowerCase()
                .includes(`${filter
                    .toLowerCase()}`)
            )
    }
}

const ConnectedNotes = connect(
    mapStateToProps,
    mapDispatchToProps
)(Anecdotes)

export default ConnectedNotes