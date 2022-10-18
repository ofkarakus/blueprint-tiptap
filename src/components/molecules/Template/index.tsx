import { useStore } from "utils/hooks";
import ContextMenu from "components/atoms/ContextMenu";
import * as e from "./styles";

const Template = () => {
  const { contextMenu, textBlocks } = useStore();

  return (
    <e.Background>
      <e.Template id="editor-template">
        {textBlocks.map((el) => el.block)}
      </e.Template>
      {contextMenu.isVisible && (
        <ContextMenu top={contextMenu.points.y} left={contextMenu.points.x} />
      )}
    </e.Background>
  );
};

export default Template;
