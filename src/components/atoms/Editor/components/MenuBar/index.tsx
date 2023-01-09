import { Editor } from '@tiptap/react';
import Button from './components/Button';
import { toolArr, getProp } from './utils';
import * as e from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuBar = ({ editor }: { editor: Editor | null }) => {
    if (!editor) {
        return null;
    }

    return (
        <e.Wrapper onClick={(e) => e.stopPropagation()} onMouseDown={(e) => e.stopPropagation()}>
            {toolArr.map((tool, index) => (
                <e.BtnWrapper key={index}>
                    <Button
                        onClick={getProp(editor)[tool.name].onClick}
                        disabled={getProp(editor)[tool.name].disabled}
                        className={getProp(editor)[tool.name].className}
                    >
                        {(() => {
                            switch (tool.name) {
                                case 'h1':
                                case 'h2':
                                    return <tool.icon />;
                                default:
                                    return <FontAwesomeIcon icon={tool.icon} />;
                            }
                        })()}
                    </Button>
                </e.BtnWrapper>
            ))}
        </e.Wrapper>
    );
};

export default MenuBar;
