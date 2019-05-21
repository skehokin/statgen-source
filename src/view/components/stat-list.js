import React, { Component } from "react";
import Box from "./box";
import List from "./list";

class StatList extends Component {
  render() {
    const { stats } = this.props;
    return (
      <Box>
        <List className="stats">
          {Object.keys(stats).map(stat => (
            <li className="stat">
              <Box>
                <Box className="stat-number">{stats[stat]}</Box>
                <Box className="circle-desc">{stat}</Box>
              </Box>
            </li>
          ))}
        </List>
      </Box>
    );
  }
}
export default StatList;
