import React from 'react';
import style from './TodoList.css';
import Todo from './Todo';

function TodoList(props) {
  return (
    <div className={style.TodoList}>
    <ul> {props.list.map(function(todoElement) {
        return (
          <Todo listEl={todoElement} removeTodo={() => props.removeTodo(todoElement.id)}/>
        )
      })
    }</ul>
    </div>
  );
}

export default TodoList;
