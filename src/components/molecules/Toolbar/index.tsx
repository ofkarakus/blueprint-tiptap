import * as e from './styles';
import { toolbarArr } from './utils';
import { ReactElement } from 'react';
import Button from './components/Button';
import Resizable from 'components/atoms/Resizable';
import TipTap from 'components/atoms/Editor';
import { useActions, useStore } from 'utils/hooks';
import { DivMouseEvent } from 'utils/types';
import { BlockType } from './types';
import StaticImage from 'components/atoms/StaticImage';

const Toolbar = () => {
    const { addBlock, openContextMenu, setFocusedBlockId } = useActions();
    const { blockIdCounter } = useStore();

    const focusOnBlock = () => setFocusedBlockId(blockIdCounter);

    const onAddBlockBtn = (type: BlockType, children?: ReactElement) =>
        addBlock(
            <Resizable
                key={blockIdCounter}
                type={type}
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
                {children}
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
                                        onClick={() => onAddBlockBtn('text', <TipTap />)}
                                    >
                                        {<tool.icon />}
                                    </Button>
                                );
                            case 'square':
                                return (
                                    <Button
                                        key={tool.name}
                                        onClick={() => onAddBlockBtn('background')}
                                    >
                                        {<tool.icon />}
                                    </Button>
                                );
                            case 'image':
                                return (
                                    <Button
                                        key={tool.name}
                                        onClick={() => onAddBlockBtn('image', <StaticImage />)}
                                    >
                                        {<tool.icon />}
                                    </Button>
                                );
                            case 'print':
                                return (
                                    <Button key={tool.name} onClick={() => window.print()}>
                                        {<tool.icon />}
                                    </Button>
                                );
                            default:
                                return <Button key={tool.name}>{<tool.icon />}</Button>;
                        }
                    }))()}
            </>
        </e.Wrapper>
    );
};

export default Toolbar;
