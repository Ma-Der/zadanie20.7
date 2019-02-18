import React from 'react';
import style from './TodoList.css';

function TodoList(props) {
  let todoList = props.list.map(function(todoElement) {
    return (<li key={todoElement.id}>{todoElement.text}</li>);
  });
  return (
    <div className={style.TodoList}>
    <ul>{todoList}</ul>
    </div>
  );
}

export default TodoList;
