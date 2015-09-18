import {default as React, Component} from 'react';
class Todos extends React.Component {
  render () {
		var todosViews = this.props.todos.map((todo) => {
			return <span>{todo}</span>
		});
    return <div>{todosViews}</div>
  }
}

export default Todos;
