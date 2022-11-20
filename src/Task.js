export const Task = (props, key) => {
  return (
    <div className="task-container">
      <div className="task">
        <h2
          style={{ textDecoration: props.completed ? "line-through" : "none" }}
        >
          {props.taskName}
        </h2>
      </div>
      <div className="task-button">
        <button onClick={() => props.completeTask(props.id)}>Complete</button>
        <button onClick={() => props.deleteTask(props.id)}>X</button>
      </div>
    </div>
  );
};
