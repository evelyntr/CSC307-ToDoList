import React from "react";
import MyList from "./MyList";

function AllLists({ lists, setActive, deleteList }) {
  return (
    <ul>
      {lists.map((list) => (
        <MyList
          key={list.id}
          list={list}
          setActive={setActive}
          deleteList={deleteList}
        ></MyList>
      ))}
    </ul>
  );
}

export default AllLists;
