import {
    textBlockStyle,
    textBlockDefault,
    imageBlockDefault,
    imageBlockStyle,
    backgroundBlockDefault,
    backgroundBlockStyle,
} from './utils';
import * as e from './styles';
import { useStore } from 'utils/hooks';
import { ResizableProps } from './types';
import { forwardRef, Ref } from 'react';
import { Rnd } from 'react-rnd';

const Resizable = forwardRef((props: ResizableProps, ref: Ref<Rnd>) => {
    const { focusedBlockId } = useStore();

    switch (props.type) {
        case 'text':
            return (
                <e.StyledRnd
                    default={textBlockDefault}
                    style={textBlockStyle}
                    $isFocused={props.id === focusedBlockId}
                    ref={ref}
                    {...props}
                />
            );
        case 'background':
            return (
                <e.StyledRnd
                    default={backgroundBlockDefault}
                    style={backgroundBlockStyle}
                    disableDragging
                    ref={ref}
                    {...props}
                />
            );
        case 'image':
            return (
                <e.StyledRnd
                    default={imageBlockDefault}
                    style={imageBlockStyle}
                    $isFocused={props.id === focusedBlockId}
                    ref={ref}
                    {...props}
                />
            );
    }
});

export default Resizable;
