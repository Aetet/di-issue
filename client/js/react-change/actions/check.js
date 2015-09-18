import {Getter, Facet, Factory, Setter} from 'immutable-di/define';

var removeValueArray = function (arr, value, isAdded) {
	var idx = arr.indexOf(value);
	var isBelong = (idx > -1);
	if (!isAdded) {
		if (isBelong) {
			arr.splice(idx, 1);
		}
	} else {
		if (!isBelong) {
			arr.push(value);
		}
	}
	return arr;
}

var ChangeStartDate = Factory({
  setStartDate: Setter(['filters', 'startDate', 'value']),
  startDateValue: ['filters', 'startDate', 'value'],
})(function ({setStartDate, startDateValue}) {
  return function ({type, value}) {
		var copyStartDate = Array.prototype.splice.call(startDateValue, 0);
		var res = removeValueArray(copyStartDate, type, value);
		console.log('start:', res);
		setStartDate(res);
  }
});

var ChangeEndDate = Factory({
	setEndDate: Setter(['filters', 'endDate', 'value']),
  endDateValue: ['filters', 'endDate', 'value'],
})(function ({setEndDate, endDateValue}) {
  return function ({type, value}) {
		var copyEndDateValue = Array.prototype.splice.call(endDateValue, 0);
		var res = removeValueArray(copyEndDateValue, type, value);
		console.log('end:', res);
		setEndDate(res);
  }
});

export default {
	ChangeStartDate,
	ChangeEndDate
}
