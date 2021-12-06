import React, { useState } from "react";

function ListForm({addList, setActive}) {
    const [list, setList] = useState({
        id: "",
        name: "",
        tasks:[],
    });

    function handleListInputChange(e) {
        setList({ ...list, name: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (list.name.trim()) {
            const crypto = require("crypto");
            const id = crypto.randomBytes(16).toString("hex");
            addList({ ...list, id: id });
            setActive(id);
            // reset list input 
            setList({...list, name: ""});
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <button size="lg" type="add">+</button>
            <input 
                align="center"
                placeholder="add list"
                type="text"
                value={list.name}
                onChange={handleListInputChange}
                />
        </form>
    )
}

export default ListForm;