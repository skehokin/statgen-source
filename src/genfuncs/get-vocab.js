


import {vocabulary, traitVoiceMap} from '../datasets/vocabularies';
import listRand from '../utils/list-random';


function getVocab (scores) {
console.log(scores);
const vocabName = listRand(Object.keys(vocabulary));
const vocab = vocabulary[vocabName];
const requirements = traitVoiceMap[vocabName];
let meetsRequirements = true;

console.log(requirements)
for (let trait in requirements) {
	const wordDescription = requirements[trait];
console.log(wordDescription, 'trait', trait, 'score', scores[trait]);
	if (meetsRequirements){
	switch(wordDescription) {
		case 'high':
			meetsRequirements = scores[trait] > 0.7;
			break
		case 'low':
			meetsRequirements = scores[trait] < 0.3;
			break
		case 'notHigh':
			meetsRequirements = scores[trait] < 0.7;
			break
		case 'notLow':
			meetsRequirements = scores[trait] > 0.3;
			break
		case 'middle':
			meetsRequirements = scores[trait] > 0.3 && scores[trait] < 0.7;
	}
	}

}
if (meetsRequirements===true){
	return vocab
}
return getVocab(scores);
}


export default getVocab;