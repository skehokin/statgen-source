import statList from "./stats.json";
import roll from "./roll";

function rollStats(NPC = false) {
  const allstats = statList.reduce((all, stat) => {
    all[stat] = roll(NPC);
    return all;
  }, {});

  return allstats;
}

export default rollStats;
