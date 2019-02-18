import React from 'react';

function Todo(props) {
  return (
  props.element.map(function(todoElement) {
    return (<li onClick={props.removeTodoElement(todoElement.id)} key={todoElement.id}>{todoElement.text}</li>)
  })
);
}

export default Todo;
