import React from 'react';
import './MyToDoList.css';

const intialList = [
    {
        title: 'Today',
        numTasks: 0,
    },
];

function MyToDoList() {
    
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <div className='all-lists'>
                        <h1 className='all-lists-title'>My Lists</h1>
                        <ul className='bullet-lists'>
                            {intialList.map(item => (
                                <li className='current-list'>{item.title}
                                    <p className='num-tasks'>{item.numTasks}</p>
                                </li>
                            ))}
                            
                        </ul>
                        <form >
                            <input
                                placeholder='add list'
                                type='text'
                                className='new-list'
                            />
                            <button className='list-button'>+</button>
                        </form>
                    </div>
                </div>
                <div className='col'>
                    <div className='single-list'>
                        <h2 className='single-list-title'>Today</h2>
                        <p className='num-tasks'>0</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MyToDoList;