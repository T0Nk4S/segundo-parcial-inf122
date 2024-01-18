import React from "react";
import '../style/TaskList.css'

function TaskList({ tasks, onRemoveTask, onCompleteTask }) {
  return (
    <div className="contenedor">
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
            <button className="boton-completado"onClick={() => onCompleteTask(index)}></button>
            <button className="boton-eliminar" onClick={() => onRemoveTask(index)}></button>
          </li>
        ))}
      </ul>
    </div>

  );
}

export default TaskList;
