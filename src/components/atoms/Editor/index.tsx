import { EditorContent, useEditor, BubbleMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import './styles.scss';
import MenuBar from './components/MenuBar';

import { Color } from '@tiptap/extension-color';
import TextStyle from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import { useEffect } from 'react';
import { useStore } from 'utils/hooks';

const TipTap = ({ blockId }: { blockId: number }) => {
    const editor = useEditor({
        extensions: [StarterKit, TextStyle, Color, Underline],
        content: `Text Block`,
    });

    const { focusedBlock } = useStore();

    useEffect(() => {
        if (editor && focusedBlock?.fontColor && focusedBlock?.id === blockId) {
            editor.chain().selectAll().setColor(focusedBlock.fontColor).run();
        }
    }, [focusedBlock?.fontColor]);

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
