import "./App.css";
import { useState } from "react";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleOnChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    setToDoList([...toDoList, newTask]);
  };

  const deleteTask = (taskName) => {
    setToDoList(toDoList.filter((task) => task !== taskName));
  };

  return (
    <div className="App">
      <div>
        <h1>TO DO LIST</h1>
      </div>
      <div className="addTask">
        <input onChange={handleOnChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {toDoList.map((task) => {
          return (
            <div>
              <h2>{task}</h2>
              <button onClick={() => deleteTask(task)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
