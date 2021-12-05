import React, { useState } from 'react';
import './MyToDoList.css';
import '../Todo.css';
import '../Lists.css';
import TodoForm from "../TodoForm";
import TodoList from "../TodoList";
import ListForm from "../ListForm";
import AllLists from "../AllLists";
import { VscEllipsis, VscClose } from 'react-icons/vsc';

function MyToDoList() {
    const [click, setClick] = useState(false);

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
    const [lists, setLists] = useState([{
        id: "abc123",
        name: "Today",
        active: true,
    }]);

  function addTask(task) {
    setTasks([task, ...tasks]);
  }

  function addList(list) {
      setLists([list, ...lists]);
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

  function toggleActive(id) {
    setLists(
      lists.map(list => {
        if (list.id === id) {
          return {
            ...list,
            active: !list.active
          };
        }
        return list;
      })
    )
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function deleteList(id) {
      setLists(lists.filter(list => list.id !== id));
  }

    return (
        <div className='container'>
            <div className='row'>
                <div className='panel'>
                    <div className='all-lists'>
                        <h2 className='all-lists-title'>My Lists</h2>
                        <ListForm addList={addList}/>
                        <AllLists
                                lists={lists} 
                                toggleActive={toggleActive}
                                deleteList={deleteList}>
                            </AllLists>
                            
                    </div>
                </div>
                <div className='main'>
                    <div className='single-list'>
                        <div className='single-list-header'>
                            <h1 className='single-list-title'>Today</h1>
                            <p className='num-tasks'>{tasks.filter(task => task.completed === false).length}</p>
                 
                            <div className='dropdown-icon' onClick={handleClick}>
                                {click ? <VscClose /> : <VscEllipsis />}
                            </div>
                            <ul className={click ? 'dropdown-menu-active' : 'dropdown-menu'}>
                                <li className='menu-item-1' onClick={handleClearTasks}>Clear completed tasks</li>
                                <li className='menu-item-2' onClick={handleDeleteList}>Delete list</li>
                            </ul>
                        </div>
                        
                        <div className='single-list-tasks'>
                            <div className='tasks'/>
                            <TodoForm addTask={addTask}/>
                            <TodoList
                                tasks={tasks} 
                                toggleComplete={toggleComplete}
                                deleteTask={deleteTask}>
                            </TodoList>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MyToDoList;