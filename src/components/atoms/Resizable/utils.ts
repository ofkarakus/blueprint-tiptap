import { template, textBlock, imageBlock, listBoundary } from 'utils/constants';

export const sharedStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

export const textBlockStyle = {
    ...sharedStyle,
    border: 'dashed 1px black',
    background: 'transparent',
};

export const staticImageBlockStyle = {
    ...sharedStyle,
    border: 'dashed 1px gray',
    background: '#ededed',
};

export const dynamicImageBlockStyle = {
    border: 'solid 1px #bcbcbc',
    background: '#d8d8d8',
};

export const backgroundBlockStyle = {
    background: 'darkgray',
};

export const textBlockDefault = {
    x: template.width / 2 - textBlock.width / 2,
    y: template.height / 2 - textBlock.height / 2,
    width: textBlock.width,
    height: textBlock.height,
};

export const imageBlockDefault = {
    x: template.width / 2 - imageBlock.width / 2,
    y: template.height / 2 - imageBlock.height / 2,
    width: imageBlock.width,
    height: imageBlock.height,
};

export const listBoundaryDefault = {
    x: template.width / 2 - listBoundary.width / 2,
    y: template.height / 2 - listBoundary.height / 2,
    width: listBoundary.width,
    height: listBoundary.height,
};

export const backgroundBlockDefault = {
    x: 0,
    y: 0,
    width: template.width + 1,
    height: template.height + 1,
};

export const initialSizes = {
    text: {
        width: textBlockDefault.width,
        height: textBlockDefault.height,
    },
    'static-image': {
        width: imageBlockDefault.width,
        height: imageBlockDefault.height,
    },
    'dynamic-image': {
        width: imageBlockDefault.width,
        height: imageBlockDefault.height,
    },
    background: {
        width: backgroundBlockDefault.width,
        height: backgroundBlockDefault.height,
    },
    'list-boundary': {
        width: listBoundaryDefault.width,
        height: listBoundaryDefault.height,
    },
} as const;

export const initialCoords = {
    text: {
        x: textBlockDefault.x,
        y: textBlockDefault.y,
    },
    'static-image': {
        x: imageBlockDefault.x,
        y: imageBlockDefault.y,
    },
    'dynamic-image': {
        x: imageBlockDefault.x,
        y: imageBlockDefault.y,
    },
    background: {
        x: backgroundBlockDefault.x,
        y: backgroundBlockDefault.y,
    },
    'list-boundary': {
        x: listBoundaryDefault.x,
        y: listBoundaryDefault.y,
    },
} as const;
