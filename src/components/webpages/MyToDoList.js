import React, { useState } from "react";
import "./MyToDoList.css";
import "../Todo.css";
import "../Lists.css";
import TodoForm from "../TodoForm";
import TodoList from "../TodoList";
import ListForm from "../ListForm";
import AllLists from "../AllLists";
import { VscEllipsis, VscClose } from "react-icons/vsc";

function MyToDoList() {
  const [click, setClick] = useState(false);
  const [lists, setLists] = useState([
    {
      id: "abc123",
      name: "Today",
      tasks: [],
    },
  ]);

  const [activeListID, setActiveListID] = useState("abc123");
  const activeList = lists.find((list) => list.id === activeListID);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  // clears completed tasks in the active list
  function handleClearTasks() {
    closeMenu();
    setLists(
      lists.map((list) => {
        if (activeListID === list.id) {
          return {
            ...list,
            tasks: list.tasks.filter((task) => task.completed === false),
          };
        }

        return list;
      })
    );
  }

  // deletes the active list from the main panel
  function handleDeleteList() {
    closeMenu();
    deleteList(activeListID);
  }

  function addTask(task) {
    /*linking to backend:
    1. Send post request
    2. Get the response
    3. grab id off of response */

    setLists(
      lists.map((list) => {
        if (activeListID === list.id) {
          return {
            ...list,
            tasks: [...list.tasks, task],
          };
        }
        return list;
      })
    );
  }

  function addList(list) {
    setLists([list, ...lists]);
  }

  function toggleComplete(id) {
    setLists(
      lists.map((list) => {
        if (activeListID === list.id) {
          return {
            ...list,
            tasks: list.tasks.map((task) => {
              if (task.id === id) {
                return {
                  ...task,
                  completed: !task.completed,
                };
              }
              return task;
            }),
          };
        }
        return list;
      })
    );
  }

  function setActive(id) {
    setActiveListID(id);
  }

  function deleteTask(id) {
    setLists(
      lists.map((list) => {
        if (activeListID === list.id) {
          return {
            ...list,
            tasks: list.tasks.filter((task) => task.id !== id),
          };
        }
        return list;
      })
    );
  }

  // helper function to delete the most recently added/ active list
  function updateActiveListDelete() {
    if (activeListID === lists[0].id) {
      setActiveListID(lists[1].id);
    } else {
      setActiveListID(lists[0].id);
    }
  }

  // deletes the list from side panel
  function deleteList(id) {
    if (id === activeListID) {
      updateActiveListDelete();
    }
    setLists(lists.filter((list) => list.id !== id));
  }

  return (
    <div className="container">
      <div className="row">
        <div className="panel" style={{ height: "100%" }}>
          <div className="all-lists">
            <h2 className="all-lists-title">My Lists</h2>
            <ListForm addList={addList} setActive={setActive} />
            <AllLists
              lists={lists}
              setActive={setActive}
              deleteList={deleteList}
            ></AllLists>
          </div>
        </div>
        <div className="main" style={{ height: "100%" }}>
          <div className="single-list">
            <div className="single-list-header">
              <div style={{ height: 70 }}>
                <h1
                  className="single-list-title"
                  style={{ margin: 0, float: "left" }}
                >
                  {activeList.name}{" "}
                </h1>
                <p
                  className="num-tasks"
                  style={{
                    fontSize: 50,
                    marginTop: 0,
                    marginBottom: 0,
                    color: "#A9A9A9",
                  }}
                >
                  {" "}
                  {
                    activeList.tasks.filter((task) => task.completed === false)
                      .length
                  }
                </p>
              </div>

              <div className="dropdown-icon" onClick={handleClick}>
                {click ? <VscClose /> : <VscEllipsis />}
              </div>
              <ul className={click ? "dropdown-menu-active" : "dropdown-menu"}>
                <li className="menu-item-1" onClick={handleClearTasks}>
                  Clear completed tasks
                </li>
                <li className="menu-item-2" onClick={handleDeleteList}>
                  Delete list
                </li>
              </ul>
            </div>

            <div className="single-list-tasks">
              <div className="tasks" />
              <TodoForm addTask={addTask} />
              <TodoList
                tasks={activeList.tasks}
                toggleComplete={toggleComplete}
                deleteTask={deleteTask}
              ></TodoList>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MyToDoList;
