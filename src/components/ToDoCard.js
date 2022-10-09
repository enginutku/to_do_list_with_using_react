import React from "react";
import { useNavigate } from "react-router-dom";
import "./ToDoCard.css";

function ToDoCard(props) {
  const { todo } = props;
  const { id, title } = todo;
  const navigate = useNavigate();

  return (
    <div className="card">
      <p> {title} </p>
      <button className="button1"> Edit </button>
      <button className="button1" onClick={() => navigate(`/to-do-list/${id}`)}>
        {" "}
        Details{" "}
      </button>
      <button className="button1" onClick={deleteItem()}>
        {" "}
        Delete{" "}
      </button>
    </div>
  );

  // deletes the item (only for filter purpose)
  function deleteItem() {
    return () => {
      // get filter list from storage as string and return back to array
      let filterList = JSON.parse(localStorage.getItem("filterList"));
      // if filter list is empty first item is gonna be current item
      if (!filterList) filterList = [id];
      // if filter list is not empty add current item to the array
      else if (!filterList.includes(id)) filterList.push(id);
      // set filter list to storage as string (gotta convert from array to string)
      localStorage.setItem("filterList", JSON.stringify(filterList));
      // refresh the page after delete
      window.location.reload();
    };
  }
}

export default ToDoCard;
