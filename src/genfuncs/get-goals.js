


import {valueGoals} from '../datasets/valueGoals';
import listRand from '../utils/list-random';

function getGoals (values) {

	let possibleGoals = []

	for (let value of values) {
		if (valueGoals[value]){
			possibleGoals = [...possibleGoals, ...valueGoals[value]];
		}
	}
	return listRand(possibleGoals);

}

export default getGoals;