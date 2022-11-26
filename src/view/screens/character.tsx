import * as React from "react";

import Description from "../../modules/overview/description";
import StatList from "../../modules/stats/stat-list";
import Box from "../components/box";
import VoiceText from "../../modules/values/voice-text";
import InfoBox from "../components/info-box";
import List from "../components/list";
import Traits from "../../modules/big-five/traits";
import {Alignment} from "../../modules/alignment/get-alignment.ts";
import {AlignmentInfo} from "../../modules/alignment/alignment.tsx";

import {buildCharacter} from "../../modules/build-character/build-character";
import {Name} from "../../modules/name/get-name.ts";

function Character () {
  const [race, setRace] = React.useState();
  const [name, setName] = React.useState<Name>('');
  const [gender, setGender] = React.useState();
  const [alignment, setAlignment] = React.useState<Alignment>();
  const [stats, setStats] = React.useState();
  const [traits, setTraits] = React.useState();
  const [characterClass, setCharacterClass] = React.useState();
  const [age, setAge] = React.useState();
  const [likes, setLikes] = React.useState();
  const [dislikes, setDislikes] = React.useState();
  const [goals, setGoals] = React.useState();
  const [values, setValues] = React.useState();
  const [vocab, setVocab] = React.useState();

  const [isLoading, setIsLoading] = React.useState(true);


function setCharacterState({race, name, gender, alignment, stats, traits, characterClass, age, likes, dislikes, goals, values, vocab}){
    setRace(race);
    setName(name);
    setGender(gender);
    setAlignment(alignment);
    setStats(stats);
    setTraits(traits);
    setCharacterClass(characterClass);
    setAge(age);
    setLikes(likes);
    setDislikes(dislikes);
    setGoals(goals);
    setValues(values);
    setVocab(vocab);
    setIsLoading(false);
}

  React.useEffect(() => {
    buildCharacter(setCharacterState);
  }, []);


  function getNewCharacter() {
    window.scrollTo(0, 0);
    buildCharacter(setCharacterState);
  }

  // function getJson() {
  //   return (
  //     "data:text/json;charset=utf-8," +
  //     encodeURIComponent(JSON.stringify(this.state))
  //   );
  // }

    return (
        !isLoading && (
            <Box className="appWrapper">
            <Description
              name={name}
              age={age}
              characterClass={characterClass}
              race={race}
              gender={gender}
            />

            <Box className="statsNshit">
              <Box className="stat-list">
                <StatList stats={stats} />
                <AlignmentInfo alignment={alignment} />
              </Box>
              <VoiceText name={name} values={values} vocabulary={vocab} />
            </Box>

            <Box className="bottom-info wrap">
              <InfoBox>
                <div>LOVES</div>
                <List items={likes} />
              </InfoBox>
              <InfoBox>
                <div>HATES</div>
                <List items={dislikes} />
              </InfoBox>
              <InfoBox>
                <div>GOALS</div>
                <Box>{goals}</Box>
              </InfoBox>

              <Traits traits={traits} />
            </Box>
            <Box className="options">
              <button onClick={getNewCharacter} className="button">
                New Character!
              </button>
              {/*<Box className="button">*/}
              {/*  <a href={getJson()} download={`${name.fullName}.json`}>*/}
              {/*    Download Character as JSON*/}
              {/*  </a>*/}
              {/*</Box>*/}
            </Box>
          </Box>
        )
    );
}
export {Character};
