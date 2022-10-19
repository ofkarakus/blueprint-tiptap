import { template, textBlock, imageBlock } from 'utils/constants';

export const textBlockStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'dashed 1px black',
    background: 'transparent',
};

export const imageBlockStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'dashed 1px gray',
    background: '#ededed',
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
