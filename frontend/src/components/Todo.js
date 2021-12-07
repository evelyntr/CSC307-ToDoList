import React, { useState } from "react";
import { AiOutlineInfoCircle, AiFillInfoCircle } from "react-icons/ai";
import "@djthoms/pretty-checkbox";

function Todo({ task, toggleComplete, deleteTask }) {
  const [click, setClick] = useState(false);

  function handleCheckbox() {
    toggleComplete(task.id);
  }

  function handleDelete() {
    deleteTask(task.id);
  }

  const openInfo = () => setClick(!click);

  return (
    <div style={{ display: "flex", alignItems: "center", width: 1000 }}>
      <div
        class="pretty p-icon p-round p-smooth task-input"
        style={{ height: 21 }}
      >
        <input
          type="checkbox"
          onClick={handleCheckbox}
          checked={task.completed}
        />
        <div class="state p-warning">
          <i class="icon fa fa-check"></i>
          <label
            style={{
              color: task.completed ? "#808080" : "black",
              textDecoration: task.completed ? "line-through" : null,
            }}
          >
            {task.name}
          </label>
        </div>
      </div>

      <div className="info-icon" onClick={openInfo} style={{ marginTop: 13 }}>
        {click ? <AiFillInfoCircle /> : <AiOutlineInfoCircle />}
      </div>
      <ul className={click ? "info-active" : "info"}>
        <li className="info-item-2" onClick={handleDelete}>
          Delete
        </li>
      </ul>
    </div>
  );
}

export default Todo;
