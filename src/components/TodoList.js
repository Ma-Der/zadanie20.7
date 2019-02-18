import React from 'react';
import style from './TodoList.css';
import Todo from './Todo';

function TodoList(props) {
  return (
    <div className={style.TodoList}>
    <ul><Todo element={props.list} removeTodoElement={props.remove}/></ul>
    </div>
  );
}

export default TodoList;
