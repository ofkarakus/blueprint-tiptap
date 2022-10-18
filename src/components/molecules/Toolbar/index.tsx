import * as e from "./styles";
import { toolbarArr } from "./utils";

import Button from "./components/Button";
import Resizable from "components/atoms/Resizable";
import TipTap from "components/atoms/Editor";
import { useActions, useStore } from "utils/hooks";

const Toolbar = () => {
  const { addTextBlock, openContextMenu } = useActions();
  const { blockIdCounter } = useStore()

  const onLetterAClick = () =>
    addTextBlock(
      <Resizable
        type="text"
        onContextMenu={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          e.preventDefault();
          openContextMenu({ x: e.pageX, y: e.pageY }, blockIdCounter);
          return false;
        }}
        key={blockIdCounter}
      >
        <TipTap />
      </Resizable>
    );

  return (
    <e.Wrapper>
      <>
        {(() =>
          toolbarArr.map((tool, index) => {
            switch (tool.name) {
              case "letterA":
                return (
                  <Button
                    key={tool.name}
                    onClick={onLetterAClick}
                    onContextMenu={(e) => {
                      e.preventDefault();
                      return false;
                    }}
                  >
                    {<tool.icon />}
                  </Button>
                );
              case "image":
                return <Button key={tool.name}>{<tool.icon />}</Button>;
              default:
                return <Button key={tool.name}>{<tool.icon />}</Button>;
            }
          }))()}
      </>
    </e.Wrapper>
  );
};

export default Toolbar;
