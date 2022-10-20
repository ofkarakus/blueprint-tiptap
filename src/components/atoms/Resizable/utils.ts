import { template, textBlock, imageBlock } from 'utils/constants';

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

export const imageBlockStyle = {
    ...sharedStyle,
    border: 'dashed 1px gray',
    background: '#ededed',
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

export const backgroundBlockDefault = {
    x: 0,
    y: 0,
    width: template.width + 1,
    height: template.height + 1,
};
