import { useActions, useStore } from 'utils/hooks';
import * as e from './styles';
import { ContextMenuProps } from './types';

const ContextMenu = ({ top, left }: ContextMenuProps) => {
    const { selectedBlockId } = useStore();
    const { removeBlock, bringForwards, sendBackwards, bringToFront, sendToBack } = useActions();

    return (
        <e.Wrapper top={top} left={left}>
            <ul>
                <li onClick={() => removeBlock(selectedBlockId)}>Remove Item</li>
                <li onClick={() => bringForwards(selectedBlockId)}>Bring Forwards</li>
                <li onClick={() => sendBackwards(selectedBlockId)}>Send Backwards</li>
                <li onClick={() => bringToFront(selectedBlockId)}>Bring To Front</li>
                <li onClick={() => sendToBack(selectedBlockId)}>Send To Back</li>
                <li>Centre Horizontally</li>
                <li>Centre Vertically</li>
            </ul>
        </e.Wrapper>
    );
};

export default ContextMenu;
