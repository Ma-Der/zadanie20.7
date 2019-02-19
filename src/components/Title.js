import React from 'react';

function Title(props) {
    return (
      <div>
      <h1>Things to do ({props.todoCount})</h1>
      </div>
    );
}

export default Title;
