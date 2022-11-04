import TextBlock from './components/TextBlock';
import * as e from './styles';

const SubToolbar = () => {
    return (
        <e.Wrapper>
            {(() => {
                switch (true) {
                    case true:
                        return <TextBlock />;
                }
            })()}
        </e.Wrapper>
    );
};

export default SubToolbar;
