import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import "./styles.scss";
import MenuBar from "./components/MenuBar";

const TipTap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: ``,
  });

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default TipTap;
