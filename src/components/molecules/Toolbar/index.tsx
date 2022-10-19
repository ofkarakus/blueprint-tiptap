import * as e from './styles';
import { toolbarArr } from './utils';

import Button from './components/Button';
import Resizable from 'components/atoms/Resizable';
import TipTap from 'components/atoms/Editor';
import { useActions, useStore } from 'utils/hooks';
import { DivMouseEvent } from 'utils/types';

const Toolbar = () => {
    const { addBlock, openContextMenu, setFocusedBlockId } = useActions();
    const { blockIdCounter } = useStore();

    const focusOnBlock = () => setFocusedBlockId(blockIdCounter);

    const onAddBlockBtn = (type: 'text' | 'image') =>
        addBlock(
            <Resizable
                key={blockIdCounter}
                type="text"
                onContextMenu={(e: DivMouseEvent) => {
                    e.preventDefault();
                    openContextMenu({ x: e.pageX, y: e.pageY }, blockIdCounter);
                    return false;
                }}
                onClick={(e: DivMouseEvent) => {
                    e.stopPropagation();
                    focusOnBlock();
                }}
                onDragStart={focusOnBlock}
                onResizeStart={focusOnBlock}
            >
                <TipTap />
            </Resizable>,
        );

    return (
        <e.Wrapper>
            <>
                {(() =>
                    toolbarArr.map((tool) => {
                        switch (tool.name) {
                            case 'letterA':
                                return (
                                    <Button
                                        key={tool.name}
                                        onClick={() => onAddBlockBtn('text')}
                                    >
                                        {<tool.icon />}
                                    </Button>
                                );
                            case 'print':
                                return (
                                    <Button
                                        key={tool.name}
                                        onClick={() => window.print()}
                                    >
                                        {<tool.icon />}
                                    </Button>
                                );
                            default:
                                return (
                                    <Button key={tool.name}>
                                        {<tool.icon />}
                                    </Button>
                                );
                        }
                    }))()}
            </>
        </e.Wrapper>
    );
};

export default Toolbar;
