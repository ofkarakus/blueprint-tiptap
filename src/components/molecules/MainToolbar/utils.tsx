import {
    LetterATextVariant,
    Save,
    Copy,
    ExternalLinkSquareAlt,
    Grid,
    Image,
    Paste,
    Pencil,
    Print,
    Square,
    StickyNote,
    TextAlignJustifyBold,
} from 'icons';

export const toolbarArr = [
    { name: 'letterA', icon: LetterATextVariant, description: 'Add Text' },
    { name: 'square', icon: Square, description: 'Add Background' },
    { name: 'image', icon: Image, description: 'Add Static Image' },
    { name: 'stickyNote', icon: StickyNote, description: 'Add Dynamic Image' },
    { name: 'textAlign', icon: TextAlignJustifyBold, description: 'Add List Boundary' },
    { name: 'grid', icon: Grid, description: 'Toggle Snap Grid' },
    { name: 'pencil', icon: Pencil, description: 'Create Template' },
    { name: 'save', icon: Save, description: 'Save Template' },
    { name: 'copy', icon: Copy, description: 'Copy Template' },
    { name: 'paste', icon: Paste, description: 'Paste Template' },
    { name: 'externalLink', icon: ExternalLinkSquareAlt, description: 'Preview' },
    { name: 'print', icon: Print, description: 'Print' },
] as const;
