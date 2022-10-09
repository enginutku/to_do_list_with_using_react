import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ToDoList from "./ToDoList";
import "./ToDoListDetails.css";

function ToDoListDetails() {
  const { id } = useParams();

  const [todoDetails, setTodoDetails] = useState();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        const responseTodoDetails = res.data;
        setTodoDetails(responseTodoDetails);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(todoDetails);
  const { userId, title, completed } = todoDetails || {};

  return (
    <div className="tododetails">
      {todoDetails ? (
        <div>
          {" "}
          <h3> {`User id: ${userId}`} </h3>
          <h3> {`Title: ${title}`} </h3>
          <h3> {`Completed: ${completed}`} </h3>{" "}
        </div>
      ) : (
        <ToDoList />
      )}
    </div>
  );
}

export default ToDoListDetails;
