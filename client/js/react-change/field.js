import {default as React, Component} from 'react';
import Todos from './todos';
import Filter from './filter';
import statefull from 'immutable-di-react/statefull';
import {Getter, Facet, Factory, Setter} from 'immutable-di/define';
import Result from './result';

const ResultFacet = Facet({
	filters: ['filters'],
})(({filters}) => {
	console.log('halo');
	var keys = Object.keys(filters);
	return keys.reduce((acc, filterItem) => {
		var filter = filters[filterItem];

		console.log('val:', filter.value, 'item:', filterItem);
		return acc + filter.value.reduce((inAcc, active) => {
			return inAcc + active;
		}, `${filterItem}: `) + '\n';
	}, 'Current check: ');
});
@statefull({
	filters: ['filters'],
	todos: ['todos'],
	result: ResultFacet
})
class Field extends React.Component {
  render () {
		let {todos, filters, result} = this.props;
		console.log('result:', result);
    return (
			<div>
				<Todos todos={todos} />
				<Filter filters={filters} />
				<Result result={result} />
			</div>
		)
  }
}

export default Field;
