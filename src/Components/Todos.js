import React from 'react'
import Todo from '../Components/Todo.js'

export default function Todos(props) {
    return (
        <div className="container">
            <h3 className="title is-3 notification is-box is-primary  has-text-centered">Todos List</h3>
            <hr style={{backgroundColor: '#00d1b2'}} />
            <hr className="mb-6" style={{backgroundColor: '#00d1b2'}} />
            <div className="columns is-centered is-mobile is-multiline">

                {
                    props.todo.length === 0 ? <h3 className="notification is-box is-warning is-light subtitle is-4">No Todos to display</h3> :
                        props.todo.map((todo) => {
                            return (
                                <div className="column notification is-box m-2" key={todo.sno}>
                                    <Todo todo={todo} onDelete={props.onDelete} />
                                </div>
                            )
                        })
                }
            </div>
        </div>
    )
}
