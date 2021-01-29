import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//importing components
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  const [change, setChange] = useState("All");

  return (
    <div className="App">
      <h1> Add A To Do</h1>
      <AddTask />
      <select
        onChange={(e) => setChange(e.target.value)}
        className="custom-select"
      >
        <option>All</option>
        <option>Not Done</option>
        <option>Done</option>
      </select>
      <TaskList change={change} />
    </div>
  );
}

export default App;
