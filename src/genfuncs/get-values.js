import randomDraw from '../utils/random-draw';
import values from '../datasets/values.json';

//const values = JSON.parse(valuesInfo);

function getValues(alignment){

	const getPossibleValuesList = (alignment) => {
		 let valuesList = values.other.slice(0);
		 if (values[alignment.lawAxis]){
		 	valuesList = [...valuesList, ...values[alignment.lawAxis]]
		 }
		  if (values[alignment.goodAxis]){
		 	valuesList = [...valuesList, ...values[alignment.goodAxis]]
		 }
		 return valuesList;
	}

return randomDraw(getPossibleValuesList(alignment), 2);
}

export default getValues;