import * as e from "./styles";
import { ContextMenuProps } from "./types";

const ContextMenu = ({ top, left }: ContextMenuProps) => {
  return (
    <e.Wrapper top={top} left={left}>
      <ul>
        <li>Delete Message</li>
        <li>Pin Message</li>
        <li>Edit Message</li>
      </ul>
    </e.Wrapper>
  );
};

export default ContextMenu;
