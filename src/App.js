import "./App.css";
import { useState } from "react";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleOnChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const newToDoList = [...toDoList, newTask];
    setToDoList(newToDoList)
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
        {toDoList.map(task => <h2>{task}</h2>)}
      </div>
    </div>
  );
}

export default App;
