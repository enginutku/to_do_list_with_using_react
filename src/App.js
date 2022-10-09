import ToDoList from "./components/ToDoList";
import ToDoListDetails from "./components/ToDoListDetails";
import { Routes, Route } from "react-router-dom";
import CheckUserDetails from "./CheckUserDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<CheckUserDetails />}></Route>
        <Route exact path="/to-do-list" element={<ToDoList />}></Route>
        <Route
          exact
          path="/to-do-list/:id"
          element={<ToDoListDetails />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
