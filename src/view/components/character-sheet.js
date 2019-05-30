import React, { Component } from "react";
import getPdf from "../../utils/pdf";

class CharacterSheet extends Component {
  render() {
    // const { } = this.props;
    return (
      <button className="button" onClick={getPdf}>
        {this.props.children}
      </button>
    );
  }
}
export default CharacterSheet;
