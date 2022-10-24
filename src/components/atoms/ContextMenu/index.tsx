import { useActions, useStore } from 'utils/hooks';
import * as e from './styles';
import { ContextMenuProps } from './types';
import { template } from 'utils/constants';

const ContextMenu = ({ top, left }: ContextMenuProps) => {
    const { selectedBlockId, blocks } = useStore();
    const { removeBlock, bringForwards, sendBackwards, bringToFront, sendToBack } = useActions();

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

    return (
        <e.Wrapper top={top} left={left}>
            <ul>
                <li onClick={() => removeBlock(selectedBlockId)}>Remove Item</li>
                <li onClick={() => bringForwards(selectedBlockId)}>Bring Forwards</li>
                <li onClick={() => sendBackwards(selectedBlockId)}>Send Backwards</li>
                <li onClick={() => bringToFront(selectedBlockId)}>Bring To Front</li>
                <li onClick={() => sendToBack(selectedBlockId)}>Send To Back</li>
                <li onClick={() => centre('horizontally')}>Centre Horizontally</li>
                <li onClick={() => centre('vertically')}>Centre Vertically</li>
                <li onClick={() => normalise()}>Normalise Aspect Ratio</li>
            </ul>
        </e.Wrapper>
    );
};

export default ContextMenu;
