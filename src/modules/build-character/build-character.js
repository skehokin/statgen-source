import getRace from "../overview/get-race";
import getGender from "../overview/get-gender";
import getName from "../name/get-name.ts";
import rollStats from "../stats/roll-stats";
import getAge from "../overview/get-age";
import getClass, { applyClassToStats } from "../overview/get-class";
import getAlignment from "../alignment/get-alignment.ts";
import getLikes from "../likes/get-likes";
import getValues from "../values/get-values";
import getGoals from "../goals/get-goals";
import getTraits from "../big-five/get-traits";
import getVocab from "../values/get-vocab";

const OPTIMISE_FOR_CLASS = false;
const NPC = false;


function buildCharacterBase () {
    const race = getRace();
    const gender = getGender();
    const rawStats = rollStats(NPC);
    const characterClass = getClass(rawStats, OPTIMISE_FOR_CLASS);
    const adjustedStats = applyClassToStats(rawStats, characterClass);

    return { race, gender, characterClass, stats: adjustedStats };
}

 function buildCharacter(setCharacterState) {
    const {race, gender, characterClass, stats} = buildCharacterBase();



     const age = getAge();
     const name = getName(gender, race);

    // personality
     const alignment = getAlignment();
     const { likes, dislikes } = getLikes();
    const values = getValues(alignment);
    const goals = getGoals(values);
    const traits = getTraits(alignment.lawAxis, stats );
    const vocab = getVocab(traits.scores);

    setCharacterState({
        stats,
        traits,
        vocab,
        goals,
        values,
        characterClass,
        likes,
        dislikes,
        alignment,
        race,
        name,
        gender,
        age,
    });
}

export {buildCharacter}