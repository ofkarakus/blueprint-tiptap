import * as e from "./styles";
import { toolbarArr } from "./utils";
import * as d3 from "d3";

import Button from "./components/Button";

const data = [{ x: 120, width: 100, height: 100 }];

const Toolbar = () => {
  const onClickLetterA = () => {
    const textBlock = d3
      .select("#editor-template")
      .append("rect")
      .data(data)
      .attr("x", (d) => d.x)
      .attr("width", (d) => d.width)
      .attr("height", (d) => d.height);
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
