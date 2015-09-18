import {default as React, Component} from 'react';
class CheckboxList extends React.Component {
	onChange(e) {
		var value = e.target.value;
		var isChecked = e.target.checked;
		this.props.onChange({type: value, value: isChecked});
	}
  render () {
		var {list, value} = this.props;
		var checks =	list.map((item) => {
			return <input type="checkbox" onChange={this.onChange.bind(this)} checked={value.indexOf(item) > -1} value={item}>{item}</input>
		});
    return (
			<div>
				{checks}
			</div>
		)
  }
}

export default CheckboxList;
