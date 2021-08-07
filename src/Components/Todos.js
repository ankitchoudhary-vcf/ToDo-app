import React from 'react'
import Todo from '../Components/Todo.js'

export default function Todos(props) {
    return (
        <div className="container">
            <h3 className="title is-size-3-desktop is-size-5-touch notification is-box is-primary  has-text-centered">Todos List</h3>
            <hr style={{backgroundColor: '#00d1b2'}} />
            <hr className="mb-6" style={{backgroundColor: '#00d1b2'}} />
            <div className="columns is-centered is-mobile is-multiline">

                {
                    props.todo.length === 0 ? <h3 className="notification is-box is-warning is-light mb-3 is-size-3-desktop is-size-5-touch m-1 p-3">No Todos to display</h3> :
                        props.todo.map((todo) => {
                            return (
                                        <Todo key={todo.sno} todo={todo} onDelete={props.onDelete} />
                            )
                        })
                }
            </div>
      <hr style={{backgroundColor: '#00d1b2'}} />
        </div>
    )
}
