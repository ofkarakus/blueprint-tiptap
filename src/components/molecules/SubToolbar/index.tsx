import Background from './components/Background';
import DynamicImage from './components/DynamicImage';
import ListBoundary from './components/ListBoundary';
import StaticImage from './components/StaticImage';
import TextBlock from './components/TextBlock';
import * as e from './styles';
import { useStore } from 'utils/hooks';

const SubToolbar = () => {
    const { areToolbarsVisible } = useStore();

    return (
        <e.Wrapper $isVisible={areToolbarsVisible}>
            {(() => {
                switch (true) {
                    case true:
                        return <TextBlock />;
                    case true:
                        return <StaticImage />;
                    case true:
                        return <DynamicImage />;
                    case true:
                        return <Background />;
                    case true:
                        return <ListBoundary />;
                }
            })()}
        </e.Wrapper>
    );
};

export default SubToolbar;
