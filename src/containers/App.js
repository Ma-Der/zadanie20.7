import React from 'react';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import {hot} from 'react-hot-loader';
import TodoForm from '../components/TodoForm';
import uuid from 'uuid';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          text: 'clean room'
        },
        {
          id: 2,
          text: 'wash the dishes'
        },
        {
          id: 3,
          text: 'feed my cat'
        }
      ]
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }
  addTodo(val) {
    const todo = {
      text: val,
      id: uuid.v4(),
    };
    const data = [...this.state.data, todo];
    this.setState({data});
  }
  removeTodo(id) {
    const reminder = this.state.data.filter(todo => todo.id !== id);
    this.setState({data: reminder});
  }


  render() {
    return (
      <div className={style.TodoApp}>
        <Title todoCount={this.state.data.length}/>
        <TodoForm addTodo={this.addTodo} list={this.state.data}/>
        <TodoList removeTodo={this.removeTodo} list={this.state.data}/>
      </div>
    );
  }
}

export default hot(module)(App);
