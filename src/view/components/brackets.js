import React, { Component } from "react";
import Box from "./box";

class Brackets extends Component {
  render() {
    return (
      <Box className="bracket-text">
        <span className="bracket">[</span>
        {this.props.children}
        <span className="bracket">]</span>
      </Box>
    );
  }
}
export default Brackets;
