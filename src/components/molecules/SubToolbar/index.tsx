import Background from './components/Background';
import DynamicImage from './components/DynamicImage';
import ListBoundary from './components/ListBoundary';
import StaticImage from './components/StaticImage';
import TextBlock from './components/TextBlock';
import * as e from './styles';
import { useStore } from 'utils/hooks';
import { useEffect, useState } from 'react';

const SubToolbar = () => {
    const { isMTbarVisible, blocks, focusedBlockId } = useStore();
    const blockType = blocks.find((el) => el.id === focusedBlockId)?.type!;
    const [selectedRnd, setSelectedRnd] = useState<HTMLElement | null>(null);

    useEffect(() => {
        const rnd = document.getElementById(String(focusedBlockId));
        setSelectedRnd(rnd);
    }, [focusedBlockId]);

    return (
        <e.Wrapper $isMTbarVisible={isMTbarVisible} $isSTbarVisible={focusedBlockId}>
            {(() => {
                switch (blockType) {
                    case 'text':
                        return <TextBlock selectedRnd={selectedRnd} />;
                    case 'static-image':
                        return <StaticImage selectedRnd={selectedRnd} />;
                    case 'dynamic-image':
                        return <DynamicImage selectedRnd={selectedRnd} />;
                    case 'background':
                        return <Background selectedRnd={selectedRnd} />;
                    case 'list-boundary':
                        return <ListBoundary selectedRnd={selectedRnd} />;
                }
            })()}
        </e.Wrapper>
    );
};

export default SubToolbar;
