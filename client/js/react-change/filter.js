import {default as React, Component} from 'react';
import StartDate from './start-date';
import EndDate from './end-date';
var components = {
	startDate: StartDate,
	endDate: EndDate
}
class Filter extends React.Component {
  render () {
		var {filters} = this.props;
		var keys = Object.keys(filters);
    var filters = keys.map(filterItem => {
			var Comp = components[filterItem];
			return <Comp />
		});

		return <div>{filters}</div>
  }
}

export default Filter;
