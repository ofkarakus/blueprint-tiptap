import * as e from "./styles";
import { toolbarArr } from "./utils";
import * as d3 from "d3";

import Button from "./components/Button";
import { textBlockSizes } from "../../../utils/constants";

const Toolbar = () => {
  const onClickLetterA = () => {
    const textBlock = d3
      .select("#editor-template")
      .append("rect")
      .data(textBlockSizes)
      .attr("x", (d) => d.x)
      .attr("y", (d) => d.y)
      .attr("width", (d) => d.width)
      .attr("height", (d) => d.height)
      .attr("stroke", "darkgray")
      .attr("stroke-width", 1)
      .attr("stroke-dasharray", "3,3")
      .attr("fill", "transparent")
      .attr("pointer-events", "none");
  };

  return (
    <e.Wrapper>
      {toolbarArr.map((tool) => (
        <>
          {tool.name === "letterA" ? (
            <Button onClick={onClickLetterA}>{<tool.icon />}</Button>
          ) : (
            <Button>{<tool.icon />}</Button>
          )}
        </>
      ))}
    </e.Wrapper>
  );
};

export default Toolbar;
