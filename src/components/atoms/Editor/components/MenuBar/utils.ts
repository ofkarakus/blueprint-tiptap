import { Editor } from '@tiptap/react';
import {
    BlockQuote,
    Bold,
    ClearStyle,
    Code,
    CodeBox,
    EditorListBullet,
    HeadingH1,
    HeadingH2,
    HeadingH3,
    HeadingH4,
    HeadingH5,
    HeadingH6,
    HorizontalRule,
    Italic,
    OrderedList,
    Paragraph,
    Redo,
    TextNewLine,
    TextStrikethrough,
    Undo,
} from 'icons';

export const getProp = (
    editor: Editor,
): Record<
    string,
    {
        onClick: () => boolean;
        disabled?: boolean;
        className?: string;
    }
> => {
    return {
        bold: {
            onClick: () => editor.chain().focus().toggleBold().run(),
            disabled: !editor.can().chain().focus().toggleBold().run(),
            className: editor.isActive('bold') ? 'is-active' : '',
        },
        italic: {
            onClick: () => editor.chain().focus().toggleItalic().run(),
            disabled: !editor.can().chain().focus().toggleItalic().run(),
            className: editor.isActive('italic') ? 'is-active' : '',
        },
        strike: {
            onClick: () => editor.chain().focus().toggleStrike().run(),
            disabled: !editor.can().chain().focus().toggleStrike().run(),
            className: editor.isActive('strike') ? 'is-active' : '',
        },
        code: {
            onClick: () => editor.chain().focus().toggleCode().run(),
            disabled: !editor.can().chain().focus().toggleCode().run(),
            className: editor.isActive('code') ? 'is-active' : '',
        },
        clearMarks: {
            onClick: () => editor.chain().focus().unsetAllMarks().run(),
        },
        clearNodes: {
            onClick: () => editor.chain().focus().clearNodes().run(),
        },
        paragraph: {
            onClick: () => editor.chain().focus().setParagraph().run(),
            className: editor.isActive('paragraph') ? 'is-active' : '',
        },
        h1: {
            onClick: () =>
                editor.chain().focus().toggleHeading({ level: 1 }).run(),
            className: editor.isActive('heading', { level: 1 })
                ? 'is-active'
                : '',
        },
        h2: {
            onClick: () =>
                editor.chain().focus().toggleHeading({ level: 2 }).run(),
            className: editor.isActive('heading', { level: 2 })
                ? 'is-active'
                : '',
        },
        h3: {
            onClick: () =>
                editor.chain().focus().toggleHeading({ level: 3 }).run(),
            className: editor.isActive('heading', { level: 3 })
                ? 'is-active'
                : '',
        },
        h4: {
            onClick: () =>
                editor.chain().focus().toggleHeading({ level: 4 }).run(),
            className: editor.isActive('heading', { level: 4 })
                ? 'is-active'
                : '',
        },
        h5: {
            onClick: () =>
                editor.chain().focus().toggleHeading({ level: 5 }).run(),
            className: editor.isActive('heading', { level: 5 })
                ? 'is-active'
                : '',
        },
        h6: {
            onClick: () =>
                editor.chain().focus().toggleHeading({ level: 6 }).run(),
            className: editor.isActive('heading', { level: 6 })
                ? 'is-active'
                : '',
        },
        bulletList: {
            onClick: () => editor.chain().focus().toggleBulletList().run(),
            className: editor.isActive('bulletList') ? 'is-active' : '',
        },
        orderedList: {
            onClick: () => editor.chain().focus().toggleOrderedList().run(),
            className: editor.isActive('orderedList') ? 'is-active' : '',
        },
        codeBlock: {
            onClick: () => editor.chain().focus().toggleCodeBlock().run(),
            className: editor.isActive('codeBlock') ? 'is-active' : '',
        },
        blockquote: {
            onClick: () => editor.chain().focus().toggleBlockquote().run(),
            className: editor.isActive('blockquote') ? 'is-active' : '',
        },
        horizontalRule: {
            onClick: () => editor.chain().focus().setHorizontalRule().run(),
        },
        hardBreak: {
            onClick: () => editor.chain().focus().setHardBreak().run(),
        },
        undo: {
            onClick: () => editor.chain().focus().undo().run(),
            disabled: !editor.can().chain().focus().undo().run(),
        },
        redo: {
            onClick: () => editor.chain().focus().redo().run(),
            disabled: !editor.can().chain().focus().redo().run(),
        },
    };
};

export const toolArr = [
    { name: 'bold', icon: Bold },
    { name: 'italic', icon: Italic },
    { name: 'strike', icon: TextStrikethrough },
    { name: 'code', icon: Code },
    { name: 'clearMarks', icon: ClearStyle },
    { name: 'clearNodes', icon: ClearStyle },
    { name: 'paragraph', icon: Paragraph },
    { name: 'h1', icon: HeadingH1 },
    { name: 'h2', icon: HeadingH2 },
    { name: 'h3', icon: HeadingH3 },
    { name: 'h4', icon: HeadingH4 },
    { name: 'h5', icon: HeadingH5 },
    { name: 'h6', icon: HeadingH6 },
    { name: 'bulletList', icon: EditorListBullet },
    { name: 'orderedList', icon: OrderedList },
    { name: 'codeBlock', icon: CodeBox },
    { name: 'blockquote', icon: BlockQuote },
    { name: 'horizontalRule', icon: HorizontalRule },
    { name: 'hardBreak', icon: TextNewLine },
    { name: 'undo', icon: Undo },
    { name: 'redo', icon: Redo },
] as const;
