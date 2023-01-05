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
import { DraggableData, Position, ResizableDelta } from 'react-rnd';
import { subtoolbar, toolbar } from 'utils/constants';
import UseReactToPrintHookReturn from 'react-to-print';
import DynamicImage from 'components/atoms/DynamicImage';
import { initialSizes, initialCoords } from 'components/atoms/Resizable/utils';

const MainToolbar = ({ handlePrint }: { handlePrint: UseReactToPrintHookReturn }) => {
    const { addBlock, openContextMenu, setFocusedBlockId, closeContextMenu, setCoords, setSize } =
        useActions();
    const { blockIdCounter, isMTbarVisible } = useStore();

    const focusOnBlock = () => setFocusedBlockId(blockIdCounter);

    const onAddBlockBtn = (type: BlockType, children?: ReactElement) => {
        addBlock(
            <Resizable
                id={blockIdCounter}
                key={blockIdCounter}
                type={type}
                onContextMenu={(e: DivMouseEvent) => {
                    e.preventDefault();
                    focusOnBlock();
                    openContextMenu(
                        {
                            x:
                                window.innerWidth - e.pageX > 175
                                    ? e.pageX - toolbar.width - subtoolbar.width
                                    : e.pageX - 150 - toolbar.width - subtoolbar.width,
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
                onDrag={(e: any, data: DraggableData) => setCoords({ x: data.x, y: data.y })}
                onResize={(
                    e: MouseEvent | TouchEvent,
                    dir: string,
                    elementRef: HTMLElement,
                    delta: ResizableDelta,
                    position: Position,
                ) => {
                    setSize({ width: elementRef.offsetWidth, height: elementRef.offsetHeight });
                    setCoords(position);
                }}
            >
                {children}
            </Resizable>,
            type,
            { width: initialSizes[type].width, height: initialSizes[type].height },
            { x: initialCoords[type].x, y: initialCoords[type].y },
        );
    };

    return (
        <e.Wrapper $isMTbarVisible={isMTbarVisible}>
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
                                    onClick={() => onAddBlockBtn('static-image', <StaticImage />)}
                                    tool={tool}
                                />
                            );
                        case 'stickyNote':
                            return (
                                <Button
                                    key={index}
                                    onClick={() => onAddBlockBtn('dynamic-image', <DynamicImage />)}
                                    tool={tool}
                                />
                            );
                        case 'textAlign':
                            return (
                                <Button
                                    key={index}
                                    onClick={() =>
                                        onAddBlockBtn('list-boundary', <e.ListBoundaryText />)
                                    }
                                    tool={tool}
                                />
                            );
                        case 'print':
                            return <Button key={index} onClick={handlePrint as any} tool={tool} />;
                        default:
                            return <Button key={index} tool={tool} />;
                    }
                }))()}
        </e.Wrapper>
    );
};

export default MainToolbar;
