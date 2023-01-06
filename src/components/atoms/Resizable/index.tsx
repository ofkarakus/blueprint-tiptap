import {
    textBlockStyle,
    textBlockDefault,
    imageBlockDefault,
    staticImageBlockStyle,
    dynamicImageBlockStyle,
    backgroundBlockDefault,
    backgroundBlockStyle,
    listBoundaryDefault,
} from './utils';
import * as e from './styles';
import { useActions, useStore } from 'utils/hooks';
import { ResizableProps } from './types';
import { useEffect, useRef } from 'react';
import { Rnd } from 'react-rnd';

const Resizable = (props: ResizableProps) => {
    const { focusedBlockId } = useStore();
    const { setRef } = useActions();
    const ref = useRef<Rnd>(null);

    useEffect(() => {
        if (ref.current) setRef(ref, props.id);
    }, []);

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
                    $isFocused={props.id === focusedBlockId}
                    ref={ref}
                    {...props}
                />
            );
        case 'static-image':
            return (
                <e.StyledRnd
                    default={imageBlockDefault}
                    style={staticImageBlockStyle}
                    $isFocused={props.id === focusedBlockId}
                    ref={ref}
                    {...props}
                />
            );
        case 'dynamic-image':
            return (
                <e.StyledRnd
                    default={imageBlockDefault}
                    style={dynamicImageBlockStyle}
                    $isFocused={props.id === focusedBlockId}
                    ref={ref}
                    {...props}
                />
            );
        case 'list-boundary':
            return (
                <e.StyledRnd
                    default={listBoundaryDefault}
                    style={textBlockStyle}
                    $isFocused={props.id === focusedBlockId}
                    ref={ref}
                    {...props}
                />
            );
    }
};

export default Resizable;