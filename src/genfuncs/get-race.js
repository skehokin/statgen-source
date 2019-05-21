import listRand from "../utils/list-random";
import races from "../datasets/races.json";

function getRace() {
  //TODO implement racial variants.
  return Math.random() < 0.8 ? listRand(races.common) : listRand(races.rare);
}

export default getRace;
