import * as e from './styles';
import MainToolbar from 'components/molecules/MainToolbar';
import Template from 'components/molecules/Template';
import { useActions, useStore } from 'utils/hooks';
import { useEffect, useRef } from 'react';
import AdditionalToolbar from 'components/molecules/AdditionalToolbar';
import SubToolbar from 'components/molecules/SubToolbar';
import { useHotkeys } from 'react-hotkeys-hook';
import { useReactToPrint } from 'react-to-print';

const Body = () => {
    const { closeContextMenu, showToolbars, hideToolbars } = useActions();
    const { isMTbarVisible } = useStore();
    const templateRef = useRef<HTMLDivElement>(null);
    const handlePrint = useReactToPrint({
        content: () => templateRef.current,
    });

    useEffect(() => {
        window.addEventListener('click', closeContextMenu);
        return () => window.removeEventListener('click', closeContextMenu);
    }, [closeContextMenu]);

    useHotkeys('q', hideToolbars, [isMTbarVisible], { keydown: true });
    useHotkeys('q', showToolbars, [isMTbarVisible], { keyup: true });

    return (
        <e.Wrapper>
            <MainToolbar handlePrint={handlePrint as any} />
            <AdditionalToolbar />
            <SubToolbar />
            <Template templateRef={templateRef} />
        </e.Wrapper>
    );
};

export default Body;
