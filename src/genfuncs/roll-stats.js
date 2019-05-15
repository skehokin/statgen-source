import statList from '../datasets/stats';
import roll from '../utils/roll';


function rollStats(){

	//const statList = JSON.parse(stats);

	const allstats = statList.reduce((all, stat) => {
		all[stat] = roll();
		return all;
	}, {});

	return allstats;
}

export default rollStats;