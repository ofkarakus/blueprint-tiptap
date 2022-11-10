import * as e from './styles';
import MainToolbar from 'components/molecules/MainToolbar';
import Template from 'components/molecules/Template';
import { useActions, useStore } from 'utils/hooks';
import { useEffect } from 'react';
import AdditionalToolbar from 'components/molecules/AdditionalToolbar';
import SubToolbar from 'components/molecules/SubToolbar';
import { useHotkeys } from 'react-hotkeys-hook';

const Body = () => {
    const { closeContextMenu, showToolbars, hideToolbars } = useActions();
    const { areToolbarsVisible, focusedBlockId } = useStore();

    useEffect(() => {
        window.addEventListener('click', closeContextMenu);
        return () => window.removeEventListener('click', closeContextMenu);
    }, [closeContextMenu]);

    useHotkeys('q', hideToolbars, [areToolbarsVisible], { keydown: true });
    useHotkeys('q', showToolbars, [areToolbarsVisible], { keyup: true });

    return (
        <e.Wrapper>
            <MainToolbar />
            <AdditionalToolbar />
            {focusedBlockId && <SubToolbar focusedBlockId={focusedBlockId} />}
            <Template />
        </e.Wrapper>
    );
};

export default Body;
