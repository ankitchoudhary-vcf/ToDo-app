import React from 'react'
import Todo from '../Components/Todo.js'

export default function Todos(props) {
    return (
        <div className="container">
            <h3 className="title is-3 mt-6 notification mx-6 is-box is-primary is-light  has-text-centered">Todos List</h3>
            <hr className="mx-3" />
            <hr className="mx-3 mb-6" />
            <div className="columns notification is-primary is-light m-6 p-2 is-box is-centered is-vcentered is-mobile is-multiline">

                {
                    props.todo.length === 0 ? "No Todos to display" :
                        props.todo.map((todo) => {
                            return (
                                <div className="column notification is-box is-6 m-2" key={todo.sno}>
                                    <Todo todo={todo} onDelete={props.onDelete} />
                                </div>
                            )
                        })
                }
            </div>
        </div>
    )
}
