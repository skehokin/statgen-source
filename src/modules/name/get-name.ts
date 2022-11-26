import namesInfo from "./data-sets/names.json";
import orderInfo from "./data-sets/word-order.json";
import listRand from "../../utils/list-random";
import randomDraw from "../../utils/random-draw";
import limitJoin from "../../utils/limit-list-join";

export interface Name {
    fullName: string;
    first: string;
    last: string;
}

const sameJoinLetters = (partOne, partTwo) =>
  partOne[partOne.length - 1] === partTwo[0];

const getNameEnd = gender =>
  gender
    ? listRand(namesInfo[gender])
    : listRand([...namesInfo["female"], ...namesInfo["male"]]);

const joiner = (a, b) => {
  if (sameJoinLetters(a, b)) {
    b = b.substring(1);
  }
  return [a, b].join("");
};

const genFirstName = gender => {
  const name = [];
  name[0] = listRand(namesInfo.start);
  name[1] = getNameEnd(gender);

  if (sameJoinLetters(name[0], name[1])) {
    name[1] = name[1].substring(1);
  }
  return joiner(name[0], name[1]);
};

const getElfName = length => {
  const nameMeaningParts = randomDraw(Object.keys(namesInfo.sindarin), 2);
  console.log(nameMeaningParts);
  const sortedNameParts = nameMeaningParts.sort(sortNameElements);
  console.log(sortedNameParts);
  const translatedNameParts = sortedNameParts.map(
    value => namesInfo.sindarin[value]
  );
  console.log(translatedNameParts);
  return limitJoin(translatedNameParts, length, joiner);
};

const sortNameElements = (a, b) => (orderInfo[a] > orderInfo[b] ? 1 : -1);

function getName(gender, race):Name {
  const first = genFirstName(gender);
  const last =
    race === "elf"
      ? getElfName(13)
      : randomDraw(namesInfo.last, 2)
          .sort(sortNameElements)
          .join("");

  return { fullName: `${first} ${last}`, first, last };
}

export default getName;
