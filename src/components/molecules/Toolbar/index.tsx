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

const Toolbar = () => {
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
                    toolbarArr.map((tool) => {
                        switch (tool.name) {
                            case 'letterA':
                                return (
                                    <Button
                                        key={tool.name}
                                        onClick={() => onAddBlockBtn('text', <TipTap />)}
                                        icon={tool.icon}
                                    />
                                );
                            case 'square':
                                return (
                                    <Button
                                        key={tool.name}
                                        onClick={() => onAddBlockBtn('background')}
                                        icon={tool.icon}
                                    />
                                );
                            case 'image':
                                return (
                                    <Button
                                        key={tool.name}
                                        onClick={() => onAddBlockBtn('image', <StaticImage />)}
                                        icon={tool.icon}
                                    />
                                );
                            case 'print':
                                return (
                                    <Button
                                        key={tool.name}
                                        onClick={() => window.print()}
                                        icon={tool.icon}
                                    />
                                );
                            default:
                                return <Button key={tool.name} icon={tool.icon} />;
                        }
                    }))()}
            </>
        </e.Wrapper>
    );
};

export default Toolbar;
