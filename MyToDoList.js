
import React, {useState, useEffect} from 'react';
import './MyToDoList.css';
import TodoForm from "../TodoForm";
import TodoList from "../TodoList";
import { VscEllipsis, VscClose } from 'react-icons/vsc';
import '../Todo.css';
import axios from 'axios';
// import { GoThreeBars } from 'react-icons/go';
// import { IoClose } from 'react-icons/io5';
// import { FiInfo } from 'react-icons/fi';

// const intialList = [
//     {
//         listName: 'Today',
//         numTasks: 0,
//     },
// ];

function MyToDoList() {
    const [click, setClick] = useState(false);

    // const showAllLists = () => setClick(!click);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    function handleClearTasks() {
        closeMenu();
        setTasks(tasks.filter(task => task.completed === false));
    };

    const handleDeleteList = () => {
        closeMenu();
        setClick(!click);
    };

    const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks([task, ...tasks]);
  }

  function toggleComplete(id) {
    setTasks(
      tasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
    )
  }

  async function fetchAll(){
    try {
       const response = await axios.get('http://localhost:5000');
       return response.data.task_list;     
    }
    catch (error){
    //We're not handling errors. Just logging into the console.
    console.log(error); 
    return false;         
    }
    }

    useEffect(() => {
        fetchAll().then( result => {
        if (result)
            setTasks(result);
        });
    }, [] );

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

    return (
        <div className='container'>
            <div className='row'>
                <div className='panel'>
                    <div className='all-lists'>
                        {/* <div className='all-lists-icon' onClick={showAllLists}>
                            {click ? <IoClose /> : <GoThreeBars />}
                        </div> */}
                        <h2 className='all-lists-title'>My Lists</h2>
                        <ul className='list-of-lists' data-lists>
                            <li className='list-name active'>Today </li>
                            <li className='list-name'>Tomorrow</li>
                            
                            
                            {/* {intialList.map(item => (
                                <p className='current-list'>{item.listName}
                                    <p className='num-tasks'>{item.numTasks}</p>
                                </p>
                            ))} */}
                            
                        </ul>
                        <form className='add-list-form' action='' data-new-list-form>
                            <input
                                placeholder='add list'
                                type='text'
                                data-new-list-input
                            />
                            <button className='list-button'>+</button>
                        </form>
                    </div>
                </div>
                <div className='main'>
                    <div className='single-list'>
                        <div className='single-list-header'>
                            <h1 className='single-list-title'>Today</h1>
                            <p className='num-tasks'>{tasks.filter(task => task.completed === false).length}</p>
                    
                            {/* {intialList.map(item => (
                                <h1 className='single-list-title'>{item.listName}
                                    <p className='num-tasks'>{item.numTasks}</p>
                                </h1>
                            ))} */}
                 
                            <div className='dropdown-icon' onClick={handleClick}>
                                {click ? <VscClose /> : <VscEllipsis />}
                            </div>
                            <ul className={click ? 'dropdown-menu-active' : 'dropdown-menu'}>
                                <li className='menu-item-1' onClick={handleClearTasks}>Clear completed tasks</li>
                                <li className='menu-item-2' onClick={handleDeleteList}>Delete list</li>
                            </ul>
                        </div>
                        
                        <div className='single-list-tasks'>
                            <div className='tasks' data-tasks />
                            <TodoList
                                tasks={tasks} 
                                toggleComplete={toggleComplete}
                                deleteTask={deleteTask}>
                            </TodoList>
                            <TodoForm addTask={addTask}/>
                            {/* <template className='task-template'>
                                <div className='task'>
                                    <input type='checkbox' />
                                    <span className='custom-checkbox' />
                                </div>
                            </template>
                            <form className='add-task-form' action='' data-new-task-form>
                                <input
                                    placeholder='add task'
                                    type='text'
                                    data-new-task-input
                                />
                                <button className='task-button'>+</button>
                            </form> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    async function fetchAll(){
        try {
           const response = await axios.get('http://localhost:5000');
           return response.data.task_list;     
        }
        catch (error){
           //We're not handling errors. Just logging into the console.
           console.log(error); 
           return false;         
        }
     }
}
export default MyToDoList;