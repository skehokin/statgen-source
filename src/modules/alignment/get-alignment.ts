import { goodEvil, lawChaos } from "../../datasets/short-sets";
import listRand from "../../utils/list-random";

export interface Alignment {
    goodAxis: string;
    lawAxis: string;
    full: string;
}

const getAlignment = () : Alignment => {
  const goodAxis = listRand(goodEvil);
  const lawAxis = listRand(lawChaos);
  const full = goodAxis === lawAxis ? "true neutral" : `${lawAxis} ${goodAxis}`;
  return { goodAxis, lawAxis, full };
};
export default getAlignment;
