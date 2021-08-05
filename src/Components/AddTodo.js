import React, { useState } from "react";

export const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc || title === " " || desc === " ") {
      alert("Title or Description cannot be blank");
    }
    else
    {
        props.addTodo(title, desc);
        setTitle("");
        setDesc("");
    }
  };
  return (
    <div className="container">
      <h3 className="notification is-primary is-light title is-4 has-text-centered m-6">
        Add a Todo
      </h3>
      <hr className="mx-3" />
      <form onSubmit={submit} className="m-6">
        <div className="field">
          <div className="control">
            <input
              className="input"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
              id="title"
              placeholder="Todo Title"
            />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <textarea
              className="textarea"
              id="desc"
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
              placeholder="Todo Description"
            ></textarea>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-primary">Add Todo</button>
          </div>
        </div>
      </form>
      <hr className="mx-3" />
      <hr className="mx-3 mb-6" />
    </div>
  );
};
