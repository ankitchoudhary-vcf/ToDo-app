import React from 'react'

export default function Todo(props) {
    return (
        <>
            <h4 className="title is-4 mb-0">{props.todo.title}</h4>
            <p className="content m-2 pt-0">{props.todo.desc}</p>
            <button className="button is-danger" onClick={() => {props.onDelete(props.todo)}}>Delete</button>
        </>
    )
}
