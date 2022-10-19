import { Editor } from '@tiptap/react';
import Button from './components/Button';
import { toolArr, getProp } from './utils';

const MenuBar = ({ editor }: { editor: Editor | null }) => {
    if (!editor) {
        return null;
    }

    return (
        <>
            {toolArr.map((tool, index) => (
                <Button
                    onClick={getProp(editor)[tool.name].onClick}
                    disabled={getProp(editor)[tool.name].disabled}
                    className={getProp(editor)[tool.name].className}
                    key={index}
                >
                    {<tool.icon />}
                </Button>
            ))}
        </>
    );
};

export default MenuBar;
