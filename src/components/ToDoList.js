/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ToDoCard from "./ToDoCard";
import "./ToDoList.css";

function ToDoList() {
  const navigate = useNavigate();
  const [todos, setTodos] = useState();

  useEffect(() => {
    if (!localStorage.getItem("user")) notLoggedIn(navigate);
    getTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getTodos() {
    const filterList =
      JSON.parse(localStorage.getItem("filterList")) == null
        ? []
        : JSON.parse(localStorage.getItem("filterList"));
    axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res) => {
      const responseTodos = res.data;
      setTodos(
        responseTodos.slice(0, 5).filter((todo) => {
          if (!filterList) return true;
          else return !filterList.includes(todo.id);
        })
      );
    });
  }

  console.log(todos);

  return (
    <body>
      <div className="container">
        <div className="todolist">
          <h1 className="header"> To Do List </h1>
          <div style={{}}>
            {todos?.map((todo) => (
              <ToDoCard todo={todo} />
            ))}
            <button className="logoutrestore" onClick={logout(navigate)}>
              {" "}
              LOG OUT{" "}
            </button>
            <button className="logoutrestore" onClick={restore()}>
              {" "}
              RESTORE{" "}
            </button>
          </div>
        </div>
      </div>
    </body>
  );
}

// removes the deleted items (basically returns list to initial state)
function restore() {
  return () => {
    localStorage.removeItem("filterList");
    window.location.reload();
  };
}

// logs out
function logout(navigate) {
  return () => {
    localStorage.clear();
    // return to login page if logged out
    navigate(`/`);
  };
}

function notLoggedIn(navigate) {
  alert("Please login!");
  // return to login page if not logged in
  navigate(`/`);
}

export default ToDoList;
