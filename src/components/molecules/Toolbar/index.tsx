import * as e from "./styles";
import { toolbarArr } from "./utils";

import Button from "./components/Button";
import { useUpdate } from "../../atoms/Store/Global";
import Resizable from "../../atoms/Resizable";
import TipTap from "../../atoms/Editor";

const Toolbar = () => {
  const setState = useUpdate();

  const addTextBlock = () =>
    setState((prev) => ({
      ...prev,
      textBlocks: prev.textBlocks.concat(
        <Resizable type="text">
          <TipTap />
        </Resizable>
      ),
    }));

  return (
    <e.Wrapper>
      <>
        {(() =>
          toolbarArr.map((tool, index) => {
            switch (tool.name) {
              case "letterA":
                return (
                  <Button key={tool.name} onClick={() => addTextBlock()}>
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
