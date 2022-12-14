import { useActions, useStore } from 'utils/hooks';
import ContextMenu from 'components/atoms/ContextMenu';
import * as e from './styles';
import React from 'react';

const Template = ({ templateRef }: { templateRef: React.RefObject<HTMLDivElement> }) => {
    const { contextMenu, blocks, isMTbarVisible, focusedBlockId } = useStore();
    const { setFocusedBlockId } = useActions();

    return (
        <e.Background
            onClick={() => setFocusedBlockId(0)}
            $isMTbarVisible={isMTbarVisible}
            $isSTbarVisible={focusedBlockId}
        >
            <e.Template onClick={() => setFocusedBlockId(0)} ref={templateRef}>
                {blocks.map((el) => React.cloneElement(el.block, { id: el.id }))}
            </e.Template>
            {contextMenu.isVisible && (
                <ContextMenu top={contextMenu.points.y} left={contextMenu.points.x} />
            )}
        </e.Background>
    );
};

export default Template;
