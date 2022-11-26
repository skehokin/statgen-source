import React, { Component } from "react";
import Box from "../../view/components/box";
import List from "../../view/components/list";
import listRand from "../../utils/list-random";
import { vocabulary } from "./vocabularies";
import { capitalise } from "../../utils/caps-formatter";
import _ from "lodash";

class VoiceText extends Component {
  render() {
    const { values, name, vocabulary } = this.props;
    const vocab = vocabulary;
    return (
      <Box className="voice glass-box">
        <Box className="voice-intro">
          When asked what they value most highly, {capitalise(name.first)} says
        </Box>
        <Box className="value-statement">
          "{vocab.interjection} {vocab.address} {vocab.firstAnswer(values)}{" "}
          {vocab.secondAnswer(values)}{" "}
          {listRand([vocab.certain, vocab.considering])}"
        </Box>
      </Box>
    );
  }
}
export default VoiceText;
