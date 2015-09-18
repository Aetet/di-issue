import {default as React, Component} from 'react';
import statefull from 'immutable-di-react/statefull';
import CheckboxList from './checkbox-list';
import {ChangeStartDate, ChangeEndDate} from './actions/check';

@statefull({
	startDate: ['filters', 'startDate'],
  changeStartDate: ChangeStartDate
})
class StartDate extends React.Component {
  onChange({type, value}) {
    this.props.changeStartDate({type, value});
  }
  render () {
    var {startDate} = this.props;
    var {value, types} = startDate;
    return (
      <div>
        <div>Start date</div>
        <CheckboxList list={types} value={value} onChange={this.onChange.bind(this)} />
      </div>
    );
  }
}

export default StartDate;
