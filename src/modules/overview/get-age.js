import ageChanges from "./data-sets/age-changes.json";
import _ from "lodash";

export default function getAge(multiplier) {
  const initialAge = Math.floor(Math.random() * 80);
  const age =
    initialAge > 60 ? Math.floor(Math.random() * 80) + 15 : initialAge + 15;

  const getAgeDescriptor = () => {
    if (age < 30) {
      return "young";
    } else if (age >= 30 && age < 45) {
      return "middle-aged";
    } else if (age >= 45 && age <= 70) {
      return "aging";
    }
    return "old";
  };
  return { descriptor: getAgeDescriptor(), age: age * multiplier };
}

export const applyAgeToStats = (stats, age) => {
  console.log("statsbefoer", stats);
  const newStats = _.reduce(
    stats,
    (all, statValue, statKey) => {
      all[statKey] = statValue += ageChanges[age][statKey];
      return all;
    },
    {}
  );
  console.log("stats after", newStats);
  return newStats;
};
