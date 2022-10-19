import * as e from "./styles";
import { toolbarArr } from "./utils";

import Button from "./components/Button";
import Resizable from "components/atoms/Resizable";
import TipTap from "components/atoms/Editor";
import { useActions, useStore } from "utils/hooks";
import { DivMouseEvent } from "utils/types";

const Toolbar = () => {
  const { addTextBlock, openContextMenu, setFocusedBlockId } = useActions();
  const { blockIdCounter } = useStore()

  const focusOnBlock = () => setFocusedBlockId(blockIdCounter)

  const onLetterAClick = () =>
    addTextBlock(
      <Resizable
        key={blockIdCounter}
        type="text"
        onContextMenu={(e: DivMouseEvent) => {
          e.preventDefault();
          openContextMenu({ x: e.pageX, y: e.pageY }, blockIdCounter);
          return false;
        }}
        onClick={(e: DivMouseEvent) => { e.stopPropagation(); focusOnBlock() }}
        onDragStart={focusOnBlock}
        onResizeStart={focusOnBlock}
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
