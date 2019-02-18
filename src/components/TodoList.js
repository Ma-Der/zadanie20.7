import React from 'react';
import style from './TodoList.css';

function TodoList(props) {
  let todoList = props.list.map(function(todoElement) {
    return (<li key={todoElement.id}>{todoElement.text}</li>);
  });
  return (
    <ul className={style.TodoList}>{todoList}</ul>
  );
}

export default TodoList;
