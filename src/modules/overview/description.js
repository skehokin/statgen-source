import React, { Component } from "react";
import { titleCase, capitalise } from "../../utils/caps-formatter";
import List from "../../view/components/list";
import Box from "../../view/components/box";
import Brackets from "../../view/components/brackets";

class Description extends Component {
  render() {
    const { name, age, gender, race, characterClass } = this.props;
    const classes =
      typeof characterClass === "object" ? characterClass.join(" and ") : characterClass;
    const info = gender
      ? [age.descriptor, gender, race, classes]
      : [age.descriptor, race, classes];
    const descriptors = info.map(titleCase);
    return (
      <>
        <h1 className="name">{titleCase(name.fullName)}</h1>
        <Box className="wrap-descriptor">
          <Brackets>
            <List
              className="descriptors"
              items={descriptors}
              itemClass="descriptor"
            />
          </Brackets>
        </Box>
      </>
    );
  }
}
export default Description;
