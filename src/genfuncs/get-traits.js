import traitOptions from "../datasets/personality-traits.json";
import listRand from "../utils/list-random";

const getDimensionScores = (lawAxis, Intelligence) => {
  const personalityScores = Object.keys(traitOptions).reduce(
    (scores, dimension) => {
      const score = Math.random();

      const organisedChaotic =
        lawAxis === "chaotic" && dimension === "conscientious" && score > 0.75;
      const messyLawful =
        lawAxis === "lawful" && dimension === "conscientious" && score < 0.25;
      const openLawful =
        lawAxis === "lawful" && dimension === "open" && score > 0.75;
      const restrictiveChaotic =
        lawAxis === "chaotic" && dimension === "open" && score < 0.25;

      const anyUnlikely =
        organisedChaotic || messyLawful || openLawful || restrictiveChaotic;

      scores[dimension] = anyUnlikely ? Math.random() : score;
      if (dimension === "openness") {
        console.log("before", scores[dimension]);
        scores[dimension] += (Intelligence - 10) / 20;
        if (scores[dimension] > 1) {
          scores[dimension] = 1;
        }
        console.log("after", scores[dimension]);
      }
      return scores;
    },
    {}
  );

  return personalityScores;
};

const getTraits = (lawAxis, { Intelligence = 10 }) => {
  const scores = getDimensionScores(lawAxis, Intelligence);
  const traitsList = Object.keys(scores).reduce((traits, dimension) => {
    const flattenedScore = Math.round(scores[dimension]);
    const newTrait = {
      [dimension]: listRand(traitOptions[dimension])[flattenedScore]
    };
    return { ...traits, ...newTrait };
  }, {});
  return { traitsList, scores };
};

export default getTraits;
