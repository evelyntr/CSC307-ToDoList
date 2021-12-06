import React, { useState } from "react";
import { AiOutlineInfoCircle, AiFillInfoCircle } from 'react-icons/ai';
import '@djthoms/pretty-checkbox/dist/pretty-checkbox.min.css';

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
        <div className='task-input' style={{ display: "flex"}}>
            <div className='pretty p-icon p-round p-smooth'>
                <input type="checkbox" onClick={handleCheckbox} checked={task.completed}/>
                <div className="state p-warning">
                    <i class="icon fa fa-check"></i>
                    <label><li
                        style={{
                            color: task.completed ? "#808080" : 'black',
                            textDecoration: task.completed ? "line-through" : null
                        }}
                    >
                        {task.name}
                    </li>
                    </label>
                </div>
            </div>
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