import * as React from "react";
import Box from "../../view/components/box";
import { capitalise } from "../../utils/caps-formatter";
import {Alignment} from "./get-alignment";

interface AlignmentProps {
    alignment: Alignment;
}

export function AlignmentInfo ({alignment}:AlignmentProps) {
  const {lawAxis, goodAxis, full} = alignment;

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
