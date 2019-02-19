import React from 'react';

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
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
    this.props.addTodo(e.target[0].value);
    console.log(e);
    e.preventDefault();
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Task to do: </label>
        <input type={'text'} onChange={this.handleChange} />
        <button type={'submit'}>Add task</button>
      </form>
    );
  }

}
export default TodoForm;
