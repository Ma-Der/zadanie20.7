import React from 'react';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: props.todoCount
    };
  }
  render() {
    return (
      <div>
      <h1>Things to do ({this.state.counter})</h1>
      </div>
    );
  }
}

export default Title;
