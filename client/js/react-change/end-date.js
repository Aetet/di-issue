import {default as React, Component} from 'react';
import statefull from 'immutable-di-react/statefull';
import CheckboxList from './checkbox-list';
import {ChangeStartDate, ChangeEndDate} from './actions/check';


@statefull({
	endDate: ['filters', 'endDate'],
	changeEndDate: ChangeEndDate
})
class EndDate extends React.Component {
	onChange({type, value}) {
		this.props.changeEndDate({type, value});
	}
  render () {
		var {endDate} = this.props;
		var {value, types} = endDate;
		return (
			<div>
				<div>End date</div>
				<CheckboxList list={types} value={value} onChange={this.onChange.bind(this)} />
			</div>
		);
  }
}

export default EndDate;
