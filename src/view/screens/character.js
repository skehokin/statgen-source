import React, { Component } from "react";
import getRace from "../../genfuncs/get-race";
import getName from "../../genfuncs/get-name";
import getGender from "../../genfuncs/get-gender";
import rollStats from "../../genfuncs/roll-stats";
import getClass from "../../genfuncs/get-class";
import getAge from "../../genfuncs/get-age";
import getAlignment from "../../genfuncs/get-alignment";
import getLikes from "../../genfuncs/get-likes";
import getValues from "../../genfuncs/get-values";
import getGoals from "../../genfuncs/get-goals";
import getTraits from "../../genfuncs/get-traits";
import getVocab from "../../genfuncs/get-vocab";

import Description from "../components/description";
import StatList from "../components/stat-list";
import Box from "../components/box";
import VoiceText from "../components/voice-text";
import InfoBox from "../components/info-box";
import List from "../components/list";
import Traits from "../components/traits";
import Alignment from "../components/alignment";

class Character extends Component {
  constructor(props) {
    super(props);

    this.state = {
      race: "",
      name: "",
      gender: "",
      stats: "",
      charClass: "",
      age: "",
      alignment: "",
      likes: [],
      dislikes: [],
      values: [],
      goals: "",
      vocab: {
        firstAnswer: values => "",
        secondAnswer: values => "",
        interjection: "",
        considering: "",
        certain: "",
        address: "",
        yes: "",
        no: ""
      }
    };

    this.makeCharacter = this.makeCharacter.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  makeCharacter() {
    window.scrollTo(0, 0);
    const race = getRace();
    const gender = getGender();
    const name = getName(gender, race);
    const stats = rollStats();
    const age = getAge();
    const { charClass, adjustedStats } = getClass(stats, age.descriptor);
    const alignment = getAlignment();
    const { likes, dislikes } = getLikes();
    const values = getValues(alignment);
    const goals = getGoals(values);
    const traits = getTraits(alignment.lawAxis, stats);
    const vocab = getVocab(traits.scores);
    this.setState({
      stats: adjustedStats,
      traits,
      vocab,
      goals,
      values,
      likes,
      dislikes,
      alignment,
      race,
      name,
      gender,
      age,
      charClass
    });
  }

  componentDidMount() {
    this.makeCharacter();
  }

  handleClick() {
    this.makeCharacter();
  }

  getJson() {
    return (
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(this.state))
    );
  }

  render() {
    const {
      traits,
      vocab,
      goals,
      values,
      race,
      name,
      gender,
      stats,
      charClass,
      age,
      alignment,
      likes,
      dislikes
    } = this.state;
    console.log("render", name);
    return (
      <Box className="appWrapper">
        <Description
          name={name}
          age={age}
          charClass={charClass}
          race={race}
          gender={gender}
        />

        <Box className="statsNshit">
          <Box className="stat-list">
            <StatList stats={stats} />
            <Alignment alignment={alignment} />
          </Box>
          <VoiceText name={name} values={values} vocabulary={vocab} />
        </Box>

        <Box className="bottom-info wrap">
          <InfoBox>
            <div>LIKES</div>
            <List items={likes} />
          </InfoBox>
          <InfoBox>
            <div>DISLIKES</div>
            <List items={dislikes} />
          </InfoBox>
          <InfoBox>
            <div>GOALS</div>
            <Box>{goals}</Box>
          </InfoBox>

          <Traits traits={traits} />
        </Box>
        <Box className="options">
          <button onClick={this.handleClick} className="button">
            New Character!
          </button>
          <Box className="button">
            <a href={this.getJson()} download={`${name.fullName}.json`}>
              Download Character as JSON
            </a>
          </Box>
        </Box>
      </Box>
    );
  }
}
export default Character;
