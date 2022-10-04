import { Editor } from "@tiptap/react";
import Button from "./components/Button";
import { toolArr, getProp } from "./utils";

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  return (
    <div>
      {toolArr.map((tool) => (
        <Button
          onClick={getProp(editor)[tool.name].onClick}
          disabled={getProp(editor)[tool.name].disabled}
          className={getProp(editor)[tool.name].className}
        >
          {<tool.icon />}
        </Button>
      ))}
    </div>
  );
};

export default MenuBar;
