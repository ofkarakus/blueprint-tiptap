import { useStore } from "../../../utils/hooks";
import ContextMenu from "../../atoms/ContextMenu";
import * as e from "./styles";

const Template = () => {
  const { contextMenu, textBlocks } = useStore();

  return (
    <e.Background>
      <e.Template id="editor-template">
        {textBlocks}
        {contextMenu.isVisible && (
          <ContextMenu top={contextMenu.points.y} left={contextMenu.points.x} />
        )}
      </e.Template>
    </e.Background>
  );
};

export default Template;
