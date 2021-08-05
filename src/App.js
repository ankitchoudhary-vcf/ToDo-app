import Header from "./Components/Header.js";
import Todos from "./Components/Todos.js";
import { Footer } from "./Components/Footer.js";
import React, { useState, useEffect } from "react";
import { AddTodo } from "./Components/AddTodo.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About } from "./Components/About.js";

function App() {
  let initTodos;

  if (localStorage.getItem("todos") === null) {
    initTodos = [];
  } else {
    initTodos = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title, desc) => {
    let sno = 0;

    if (todos.length !== 0) {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };

  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const burger = (e) => {
    // console.log(e.target.dataset.target);
    var nav = document.querySelector("#" + e.target.dataset.target);
    nav.classList.toggle("is-active");
    e.target.classList.toggle("is-active");
  };

  return (
    <Router>
      <Header title="My TodosList" burger={burger} />
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <div className="columns is-mobile is-centered">
                <div className="column is-5-mobile is-8-desktop notification is-box is-primary is-light mt-6 m-2">
                  <Todos todo={todos} onDelete={onDelete} />
                </div>
                <div className="column is-5-mobile is-3-desktop notification is-box is-primary is-light m-2 mt-6" >
                  <AddTodo addTodo={addTodo} />
                </div>
              </div>
            );
          }}
        ></Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
