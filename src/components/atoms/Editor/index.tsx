import { EditorContent, useEditor, BubbleMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import './styles.scss';
import MenuBar from './components/MenuBar';

import { Color } from '@tiptap/extension-color';
import TextStyle from '@tiptap/extension-text-style';

const TipTap = () => {
    const editor = useEditor({
        extensions: [StarterKit, TextStyle, Color],
        content: `Text Block`,
    });

    return (
        <div>
            {editor && (
                <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
                    <MenuBar editor={editor} />
                </BubbleMenu>
            )}
            <EditorContent editor={editor} onMouseDown={(e) => e.stopPropagation()} />
        </div>
    );
};

export default TipTap;
