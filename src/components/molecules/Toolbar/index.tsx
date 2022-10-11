import * as e from "./styles";
import { toolbarArr } from "./utils";

import Button from "./components/Button";
import { createGroup, createBlock, addHandler } from "../../../utils/helpers";
import { template, textBlock as size } from "../../../utils/constants";

const Toolbar = () => {
  const addTextBlock = () => {
    const shapesGroup = createGroup(template, 'shapes');
    const handlersGroup = createGroup(template, 'handlers');
    createBlock(shapesGroup, size);
    addHandler(shapesGroup, size);
  };


  return (
    <e.Wrapper>
      {toolbarArr.map((tool) => (
        <>
          {tool.name === "letterA" ? (
            <Button onClick={addTextBlock}>{<tool.icon />}</Button>
          ) : (
            <Button>{<tool.icon />}</Button>
          )}
        </>
      ))}
    </e.Wrapper>
  );
};

export default Toolbar;
