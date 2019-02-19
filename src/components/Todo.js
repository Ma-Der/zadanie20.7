import React from 'react';

function Todo(props) {
  return (
    <li onClick={props.removeTodo} key={props.listEl.id}>{props.listEl.text}</li>
  );
}

export default Todo;
