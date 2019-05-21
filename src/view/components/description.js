import React, { Component } from "react";
import { titleCase, capitalise } from "../../utils/caps-formatter";
import List from "./list";
import Box from "./box";
import Brackets from "./brackets";

class Description extends Component {
  render() {
    const { name, age, gender, race, charClass } = this.props;
    const classes =
      typeof charClass === "object" ? charClass.join(" and ") : charClass;
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
