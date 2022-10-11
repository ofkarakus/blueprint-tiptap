import * as e from "./styles";
import { toolbarArr } from "./utils";

import Button from "./components/Button";
import {
  createGroup,
  createBlock,
  addHandler,
  removeHandler,
} from "../../../utils/helpers";
import { template, textBlock as size } from "../../../utils/constants";

const Toolbar = () => {
  const addTextBlock = () => {
    const shapesGroup = createGroup(template, "shapes");
    const handlersGroup = createGroup(template, "handlers");
    createBlock(shapesGroup, size);
    addHandler(shapesGroup, size);
  };

  return (
    <e.Wrapper>
      <>
        {(() =>
          toolbarArr.map((tool, index) => {
            switch (tool.name) {
              case "letterA":
                return (
                  <Button key={tool.name} onClick={addTextBlock}>
                    {<tool.icon />}
                  </Button>
                );
              case "square":
                return (
                  <Button key={tool.name} onClick={() => removeHandler()}>
                    {<tool.icon />}
                  </Button>
                );
              default:
                return <Button key={tool.name}>{<tool.icon />}</Button>;
            }
          }))()}
      </>
    </e.Wrapper>
  );
};

export default Toolbar;
