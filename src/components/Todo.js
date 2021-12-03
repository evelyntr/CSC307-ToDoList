import React, { useState } from "react";
import { AiOutlineInfoCircle, AiFillInfoCircle } from 'react-icons/ai';

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
        <div style={{ display: "flex"}}>
            <input type="checkbox" onClick={handleCheckbox}/>
            <li
                style={{
                    color: "black",
                    textDecoration: task.completed ? "line-through" : null
                }}
            >
                {task.name}
            </li>
            <div className='info-icon' onClick={openInfo}>
                {click ? <AiFillInfoCircle /> : <AiOutlineInfoCircle />}
            </div>
            <ul className={click ? 'info-active' : 'info'}>
                <li className='info-item-2' onClick={handleDelete}>Delete</li>
            </ul>
            {/* <button onClick={openInfo}>FiInfo</button> */}
            {/* <button onClick={handleDelete}>delete</button> */}
        </div>
    )
}

export default Todo;