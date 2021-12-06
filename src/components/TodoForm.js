import React, { useState } from "react";

function TodoForm({addTask}) {
    const [task, setTask] = useState({
        id: "",
        name: "",
        completed: false,
    });

    function handleTaskInputChange(e) {
        setTask({ ...task, name: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (task.name.trim()) {
            const crypto = require("crypto");
            const id = crypto.randomBytes(16).toString("hex");
            addTask({ ...task, id: id });
            // reset task input 
            setTask({...task, name: ""});
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <button className='addButton' size="lg" type="add">+</button>
            <input className='new-input'
                align="center"
                placeholder="add task"
                name="task"
                type="text"
                value={task.name}
                onChange={handleTaskInputChange}
                />
        </form>
    )
}

export default TodoForm;