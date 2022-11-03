import * as e from './styles';
import { toolbarArr } from './utils';
import { createRef, ReactElement } from 'react';
import Button from './components/Button';
import Resizable from 'components/atoms/Resizable';
import TipTap from 'components/atoms/Editor';
import { useActions, useStore } from 'utils/hooks';
import { DivMouseEvent } from 'utils/types';
import { BlockType } from './types';
import StaticImage from 'components/atoms/StaticImage';
import { Rnd } from 'react-rnd';

const MainToolbar = () => {
    const { addBlock, openContextMenu, setFocusedBlockId, closeContextMenu } = useActions();
    const { blockIdCounter } = useStore();

    const focusOnBlock = () => setFocusedBlockId(blockIdCounter);

    const onAddBlockBtn = (type: BlockType, children?: ReactElement) => {
        const ref = createRef<Rnd>();
        addBlock(
            <Resizable
                key={blockIdCounter}
                type={type}
                onContextMenu={(e: DivMouseEvent) => {
                    e.preventDefault();
                    focusOnBlock();
                    openContextMenu(
                        {
                            x: window.innerWidth - e.pageX > 175 ? e.pageX : e.pageX - 150,
                            y: window.innerHeight - e.pageY > 225 ? e.pageY : e.pageY - 200,
                        },
                        blockIdCounter,
                    );
                    return false;
                }}
                onClick={(e: DivMouseEvent) => {
                    e.stopPropagation();
                    focusOnBlock();
                    closeContextMenu();
                }}
                onDragStart={focusOnBlock}
                onResizeStart={focusOnBlock}
                bounds={'parent'}
                ref={ref}
            >
                {children}
            </Resizable>,
            ref,
            type === 'background',
        );
    };

    return (
        <e.Wrapper>
            <>
                {(() =>
                    toolbarArr.map((tool, index) => {
                        switch (tool.name) {
                            case 'letterA':
                                return (
                                    <Button
                                        key={index}
                                        onClick={() => onAddBlockBtn('text', <TipTap />)}
                                        tool={tool}
                                    />
                                );
                            case 'square':
                                return (
                                    <Button
                                        key={index}
                                        onClick={() => onAddBlockBtn('background')}
                                        tool={tool}
                                    />
                                );
                            case 'image':
                                return (
                                    <Button
                                        key={index}
                                        onClick={() => onAddBlockBtn('image', <StaticImage />)}
                                        tool={tool}
                                    />
                                );
                            case 'print':
                                return (
                                    <Button
                                        key={index}
                                        onClick={() => window.print()}
                                        tool={tool}
                                    />
                                );
                            default:
                                return <Button key={index} tool={tool} />;
                        }
                    }))()}
            </>
        </e.Wrapper>
    );
};

export default MainToolbar;
