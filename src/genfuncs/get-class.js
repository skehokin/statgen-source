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
const getClassStat = (orderedStats, stats) => orderedStats[0] === 'Constitution' && stats.Strength <= 14 ? orderedStats[1] : orderedStats[0];

const getClassFromStats = (stats) => {
	let charClass = [];
	const orderedStats = getOrderedStats(stats);
	console.log(orderedStats);
	const bestStat = getClassStat(orderedStats, stats);
	const getClassFromStat = (stat) => stats[stat] >= 15 ? listRand(classOptions[stat]) : (stats[stat]>12 ? listRand(jobOptions[stat]) : listRand(jobOptions.none))

	charClass.push(getClassFromStat(bestStat));

	if (Math.random() < 0.3) {
			charClass.push(getClassFromStat(bestStat === orderedStats[1] ? orderedStats[0] : orderedStats[1]));
		}
	if (Math.random() < 0.07) {
			charClass.push(getClassFromStat(orderedStats[2]));
		}

	return charClass;
}

function getClass (stats, age, setStats) {

	const foresighted = stats.Wisdom > 13
	const updatedStats = applyAgeToStats(stats, age);

	setStats(updatedStats);

return foresighted ? getClassFromStats(updatedStats) : getClassFromStats(stats);

}

export default getClass;