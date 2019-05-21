import React, { Component } from "react";
import Box from "./box";
import _ from "lodash";
import List from "./list";
import listRand from "../../utils/list-random";

class Traits extends Component {
  render() {
    const { traits } = this.props;
    const traitsList = _.get(this.props, "traits.traitsList");

    const times = [
      " when put under pressure",
      " when bored",
      " infrequently",
      " deep inside",
      " when not feeling threatened",
      " on special occasions",
      " on the surface",
      " when with certain others",
      " with new people",
      " when left alone",
      " when tired"
    ];

    return (
      <Box className="traits">
        <List>
          {traitsList &&
            Object.keys(traitsList).map(
              trait =>
                (traits.scores[trait] > 0.6 || traits.scores[trait] < 0.4) && (
                  <li className="stat">
                    <Box>
                      <Box className="stat-number">
                        {trait[0].toUpperCase()}
                      </Box>
                      <Box className="circle-desc">
                        {traitsList[trait]}{" "}
                        {traits.scores[trait] < 0.7 &&
                          traits.scores[trait] > 0.3 &&
                          ` but only ${listRand(times)}`}
                      </Box>
                    </Box>
                  </li>
                )
            )}
        </List>
      </Box>
    );
  }
}
export default Traits;
