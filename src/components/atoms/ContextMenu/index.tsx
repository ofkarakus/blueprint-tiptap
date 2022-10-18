import { useActions, useStore } from "utils/hooks";
import * as e from "./styles";
import { ContextMenuProps } from "./types";

const ContextMenu = ({ top, left }: ContextMenuProps) => {
  const { selectedBlockId } = useStore()
  const { removeBlock } = useActions()

  return (
    <e.Wrapper top={top} left={left}>
      <ul>
        <li
          onClick={() => removeBlock(selectedBlockId)}
        >
          Remove Item
        </li>
        <li>Bring Forwards</li>
        <li>Send Backwards</li>
        <li>Bring To Front</li>
        <li>Send To Back</li>
        <li>Centre Horizontally</li>
        <li>Centre Vertically</li>
      </ul>
    </e.Wrapper>
  );
};

export default ContextMenu;
