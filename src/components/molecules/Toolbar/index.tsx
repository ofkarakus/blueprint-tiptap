import * as e from "./styles";
import { toolbarArr } from "./utils";
import * as d3 from "d3";

import Button from "./components/Button";
import { useTrackedState } from "../../atoms/Store/Global";

const Toolbar = () => {
  const state = useTrackedState();

  const onClickLetterA = () => {
    const textBlock = d3
      .select(state.templateDiv)
      .append("svg")
      .attr("width", 300)
      .attr("height", 200)
      .style("border", "1px dashed darkgray");
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
