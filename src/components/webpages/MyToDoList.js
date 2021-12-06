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
        setLists(lists.map(list => {
            if (activeListID === list.id) {
                return {
                    ...list,
                    tasks: list.tasks.filter(task => task.completed === false),
                }
            };
            
              return list; 
            
        }))
        
        // setTasks(tasks.filter(task => task.completed === false));
    };

    function handleDeleteList() {
       closeMenu();
       deleteList(activeListID);
       
       
    //    setLists(
    //        lists.filter(list => list.id !== activeListID[0])
    //    );
       
    //    setActiveListID(lists.filter(list => list.id !== activeListID[0]));
    //    setActiveList(lists.find(list => list.id === activeListID[0]));
    };


    // const [tasks, setTasks] = useState([]);
    const [lists, setLists] = useState([{
        id: "abc123",
        name: "Today",
        tasks: [],
    }]);

    const [activeListID, setActiveListID] = useState('abc123');
    // const [activeList, setActiveList] = useState(lists.find(list => list.id === activeListID[0]));
    const activeList = lists.find(list => list.id === activeListID);

  function addTask(task) {
    // Send post request

    // Get the response

    // grab id off of response



      setLists(lists.map(list => {
        if (activeListID === list.id) {
            return {
                ...list,
                tasks: [...list.tasks, task]
            };
        }
        return list;
    }));
    
    // setTasks([task, ...tasks]);
  }

  function addList(list) {
      setLists([list, ...lists]);
  }

  function toggleComplete(id) {
    setLists(lists.map(list => {
        if (activeListID === list.id) {
            return {
                ...list,
                tasks: list.tasks.map(task => {
                    if (task.id === id) {
                        return {
                            ...task,
                            completed: !task.completed
                        };
                    }
                    return task;
                })
            }
        }
        return list; 
    }
  ))
      
    // setTasks(
    //   tasks.map(task => {
    //     if (task.id === id) {
    //       return {
    //         ...task,
    //         completed: !task.completed
    //       };
    //     }
    //     return task;
    //   })
    // )
  }

  function setActive(id) {
    // setActiveListID([id, ...activeListID]);
    setActiveListID(id);
  
  }

  function deleteTask(id) {
      setLists(lists.map(list => {
        if (activeListID === list.id) {
            return {
                ...list,
                tasks: list.tasks.filter(task => task.id !== id),
            }
          };
          return list; 
        
    }))
      
    // setTasks(tasks.filter(task => task.id !== id));
  }
  function updateActiveListDelete() {
    if(activeListID === lists[0].id) {
        setActiveListID((lists[1]).id);
       } else{
        setActiveListID((lists[0]).id);
       }
  }

  function deleteList(id) {
    
    if (id === activeListID) {
        updateActiveListDelete();
    }
    setLists(lists.filter(list => list.id !== id));
      
  }
//   console.log(activeListID, activeList);
 
    console.log(lists);
    console.log(activeListID);

    // console.log(lists);
    // console.log(lists[0]);
    // console.log(lists[0].id);
    // console.log(activeListID);
    // console.log(activeList);
    return (
        <div className='container'>
            <div className='row'>
                <div className='panel'>
                    <div className='all-lists'>
                        <h2 className='all-lists-title'>My Lists</h2>
                        <ListForm 
                            addList={addList}
                            setActive={setActive}/>
                        <AllLists
                                lists={lists} 
                                setActive={setActive}
                                deleteList={deleteList}>
                            </AllLists>
                            
                    </div>
                </div>
                <div className='main'>
                    <div className='single-list'>
                        <div className='single-list-header'>
                            <h1 className='single-list-title'>{activeList.name}</h1>
                            <p className='num-tasks'>{activeList.tasks.filter(task => task.completed === false).length}</p>
                 
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
                                tasks={activeList.tasks} 
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