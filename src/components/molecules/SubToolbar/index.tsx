import Background from './components/Background';
import DynamicImage from './components/DynamicImage';
import ListBoundary from './components/ListBoundary';
import StaticImage from './components/StaticImage';
import TextBlock from './components/TextBlock';
import * as e from './styles';
import { useStore } from 'utils/hooks';
import * as types from './types';

const SubToolbar = ({ focusedBlockId }: types.Props) => {
    const { areToolbarsVisible, blocks } = useStore();
    const blockType = blocks.find((el) => el.id === focusedBlockId)?.type!;

    return (
        <e.Wrapper $isVisible={areToolbarsVisible}>
            {(() => {
                switch (blockType) {
                    case 'text':
                        return <TextBlock />;
                    case 'image':
                        return <StaticImage />;
                    // case true:
                    //     return <DynamicImage />;
                    case 'background':
                        return <Background />;
                    // case true:
                    //     return <ListBoundary />;
                }
            })()}
        </e.Wrapper>
    );
};

export default SubToolbar;
