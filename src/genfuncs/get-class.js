import statNames from '../datasets/stats.json';
import classOptions from '../datasets/class-options.json';
import jobOptions from '../datasets/jobs.json';
import listRand from '../utils/list-random';
import {applyAgeToStats} from './get-age';


const getOrderedStats = (stats) => Object.keys(stats).sort((a, b) => stats[a] < stats[b] ? 1 : -1 );


// will probably need to pass down a callback to set the stats.
// I would make that state except then everything would update itself on changes
// better to use redux, if I wanted to implement it
// which I don't, sigh. I guess I'll go with the 'everything rerenders' thing for now...
// context is actually probably sufficient.
// Oooor react hooks! that could be good, passing down a piece of state
// - except I want the data to stay as an object in one spot... but to have parts trigger rerenders lower down.
// needs more thinky.

//logic is weird here. people keep getting wisdom classes with 14 wisdom etc.
const getClassStat = (orderedStats, highCon) => (highCon && orderedStats[0] === 'Constitution' ? orderedStats[1] : orderedStats[0]);

const getClassFromStats = stats => {

	let charClass = [];
	const orderedStats = getOrderedStats(stats);
	const highCon = stats.Constitution >= 15 && stats.Strength < 14;

	const bestStat = getClassStat(orderedStats, highCon);

	const getClassFromStat = stat => {

		if (stats[stat] >= 15 && !(highCon && stat === 'Constitution')){
			return listRand(classOptions[stat]);
		}
		else if (stats[stat]>12) {
			return listRand(jobOptions[stat]);
		} else {
			const noSkillJob = listRand(jobOptions.none);
			return !charClass.includes(noSkillJob) ? noSkillJob : '';
		}
	}
	const firstClass = getClassFromStat(bestStat)
	if (firstClass) {
		charClass.push(firstClass);
	}

	if (Math.random() < 0.3) {
		let secondJobStat = '';

			if(highCon){
				secondJobStat = orderedStats[0];
			} else {
				secondJobStat = orderedStats[1]
			}

			const secondClass = getClassFromStat(secondJobStat);
			if (secondClass) {
				charClass.push(secondClass);
			}

		}
	if (Math.random() < 0.07) {
		const thirdClass = getClassFromStat(orderedStats[2])
		if (thirdClass) {
			charClass.push(thirdClass);
		}
	}

	return charClass;
}



function getClass (stats, age) {

	const foresighted = stats.Wisdom > 11;
	const adjustedStats = applyAgeToStats(stats, age);


return { charClass: foresighted ? getClassFromStats(adjustedStats) : getClassFromStats(stats), adjustedStats};

}

export default getClass;