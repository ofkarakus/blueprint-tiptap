import Background from './components/Background';
import DynamicImage from './components/DynamicImage';
import StaticImage from './components/StaticImage';
import TextBlock from './components/TextBlock';
import * as e from './styles';

const SubToolbar = () => {
    return (
        <e.Wrapper>
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
                }
            })()}
        </e.Wrapper>
    );
};

export default SubToolbar;
