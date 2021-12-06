import React, { useState } from "react";
import { VscEllipsis, VscClose } from 'react-icons/vsc';

function MyList({ list, setActive, deleteList }) {
    const [click, setClick] = useState(false);

    function handleActiveList() {
        setActive(list.id);
    }

    function handleDelete() {
        deleteList(list.id);
    }

    const openMore = () => setClick(!click);

    return (
        <div className='list-input' style={{ display: "flex"}}>
            <input type='hidden'/>
            <li onClick={handleActiveList}
                style={{
                    color: "black",
                }}
            >
                {list.name} 
            </li>
            <div className='more-icon' onClick={openMore}>
                {click ? <VscClose /> : <VscEllipsis />}
            </div>
            <ul className={click ? 'more-active' : 'more'}>
                <li className='more-item-1' onClick={handleDelete}>Delete</li>
            </ul>
           
        </div>
    )
}

export default MyList;