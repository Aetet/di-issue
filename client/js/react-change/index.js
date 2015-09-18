import React from 'react';
import Container from 'immutable-di';
import NativeCursor from 'immutable-di/cursors/native';
import root from 'immutable-di-react/root';
import Field from './field'
window.React = React;
console.log('Hon');

const container = new Container(new NativeCursor({
	filters: {
		startDate: {
			types: [
				'yesterday',
				'today'
			],
			value: ['yesterday']
		},
		endDate: {
			types: [
				'tommorrow',
				'afterTommorrow'
			],
			value: ['tommorrow']
		}
	},
	todos: [1,2,3],
	view: ['startDate', 'endDate'],
	startDate: {
		today: true
	}
}));

@root()
class App extends React.Component {
	render() {
		console.log('b');
		return <Field />
	}
}

React.render(<App container={container}/>, document.querySelectorAll('.app')[0]);
