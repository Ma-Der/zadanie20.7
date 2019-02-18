import React from 'react';

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list: props.list,
      addTodo: props.add,
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(e) {
    alert('A task was submitted: ' + this.state.value);
    this.state.addTodo(e);
    e.preventDefault();
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Task to do: </label>
        <input type={'text'} value={this.state.value} onChange={this.handleChange} />
        <button type={'submit'}>Add task</button>
      </form>
    );
  }
  componentDidMount() {
    this.state.addTodo(this.state.list.id);
  }
}
export default TodoForm;
