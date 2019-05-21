import React, { Component } from "react";
import Box from "./box";
import _ from "lodash";
import { capitalise } from "../../utils/caps-formatter";

class Alignment extends Component {
  render() {
    const lawAxis = _.get(this.props, "alignment.lawAxis", " ");
    const goodAxis = _.get(this.props, "alignment.goodAxis", " ");
    const full = _.get(this.props, "alignment.full", " ");
    const acronym =
      full !== "true neutral"
        ? lawAxis[0].toUpperCase() + goodAxis[0].toUpperCase()
        : "TN";
    return (
      <Box className="alignment">
        {capitalise(lawAxis)} <Box className="alignment-acronym">{acronym}</Box>{" "}
        {capitalise(goodAxis)}
      </Box>
    );
  }
}
export default Alignment;
