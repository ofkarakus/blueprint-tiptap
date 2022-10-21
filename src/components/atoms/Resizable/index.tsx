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

const Resizable = (props: ResizableProps) => {
    const { focusedBlockId } = useStore();

    switch (props.type) {
        case 'text':
            return (
                <e.StyledRnd
                    default={textBlockDefault}
                    style={textBlockStyle}
                    $isFocused={props.id === focusedBlockId}
                    {...props}
                />
            );
        case 'background':
            return (
                <e.StyledRnd
                    default={backgroundBlockDefault}
                    style={backgroundBlockStyle}
                    disableDragging
                    {...props}
                />
            );
        case 'image':
            return (
                <e.StyledRnd
                    default={imageBlockDefault}
                    style={imageBlockStyle}
                    $isFocused={props.id === focusedBlockId}
                    {...props}
                />
            );
        default:
            return <e.StyledRnd {...props} />;
    }
};

export default Resizable;
