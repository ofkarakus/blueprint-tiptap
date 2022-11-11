import { useActions, useStore } from 'utils/hooks';
import * as e from './styles';
import { ContextMenuProps } from './types';
import { template } from 'utils/constants';

const ContextMenu = ({ top, left }: ContextMenuProps) => {
    const { selectedBlockId, blocks } = useStore();
    const {
        removeBlock,
        bringForwards,
        sendBackwards,
        bringToFront,
        sendToBack,
        closeContextMenu,
    } = useActions();

    const centre = (position: 'horizontally' | 'vertically') => {
        const selectedBlock = blocks.find((el) => el.id === selectedBlockId);
        const currentPosition = selectedBlock?.ref.current?.getDraggablePosition()!;
        const currentWidth = selectedBlock?.ref.current?.getSelfElement()?.offsetWidth!;
        const currentHeight = selectedBlock?.ref.current?.getSelfElement()?.offsetHeight!;

        position === 'horizontally'
            ? selectedBlock?.ref.current?.updatePosition({
                  x: template.width / 2 - currentWidth / 2,
                  y: currentPosition.y,
              })
            : selectedBlock?.ref.current?.updatePosition({
                  x: currentPosition.x,
                  y: template.height / 2 - currentHeight / 2,
              });
    };

    const normalise = () => {
        const selectedBlock = blocks.find((el) => el.id === selectedBlockId);
        const currentWidth = selectedBlock?.ref.current?.getSelfElement()?.offsetWidth!;
        const currentHeight = selectedBlock?.ref.current?.getSelfElement()?.offsetHeight!;
        const normal = currentWidth <= currentHeight ? currentWidth : currentHeight;
        selectedBlock?.ref.current?.updateSize({ width: normal, height: normal });
    };

    const onClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, func: () => void) => {
        func();
        closeContextMenu();
        e.stopPropagation();
    };

    return (
        <e.Wrapper top={top} left={left}>
            <ul>
                <li onClick={() => removeBlock(selectedBlockId)}>Remove Item</li>
                <li onClick={(e) => onClick(e, () => bringForwards(selectedBlockId))}>
                    Bring Forwards
                </li>
                <li onClick={(e) => onClick(e, () => sendBackwards(selectedBlockId))}>
                    Send Backwards
                </li>
                <li onClick={(e) => onClick(e, () => bringToFront(selectedBlockId))}>
                    Bring To Front
                </li>
                <li onClick={(e) => onClick(e, () => sendToBack(selectedBlockId))}>Send To Back</li>
                <li onClick={(e) => onClick(e, () => centre('horizontally'))}>
                    Centre Horizontally
                </li>
                <li onClick={(e) => onClick(e, () => centre('vertically'))}>Centre Vertically</li>
                <li onClick={(e) => onClick(e, normalise)}>Normalise Aspect Ratio</li>
            </ul>
        </e.Wrapper>
    );
};

export default ContextMenu;
