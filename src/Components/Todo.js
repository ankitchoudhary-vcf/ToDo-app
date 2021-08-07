import React from "react";

export default function Todo(props) {
  return (
    <>
      <div className="column notification is-6-desktop is-size-3-desktop is-size-5-touch is-box m-2">
        <h4 className="title is-size-3-desktop is-size-5-touch mb-0">
          {props.todo.title}
        </h4>
        <p className="content my-2 pt-0">{props.todo.desc}</p>
        <button
          className="button is-danger is-pulled-right"
          onClick={() => {
            props.onDelete(props.todo);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
}
