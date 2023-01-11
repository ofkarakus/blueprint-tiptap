import * as e from '../../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeDropper, faXmark } from '@fortawesome/free-solid-svg-icons';
import { XMarkDiv } from './styles';
import { useActions, useStore } from 'utils/hooks';
import { useDebouncedCallback } from 'use-debounce';
import { SubtoolbarProps } from '../../types';

const BgColor = ({ selectedRnd }: SubtoolbarProps) => {
    const { setBgColor } = useActions();
    const { focusedBlock } = useStore();

    const debouncedBgColorChange = useDebouncedCallback((value) => setBgColor(value), 100);

    return (
        <e.SpecificRow1>
            <td>
                <FontAwesomeIcon icon={faEyeDropper} />
                Background Fill
            </td>
            <e.ColorBlockWrapper>
                <e.ColorBlock
                    type={'color'}
                    onInput={(e) => {
                        if (selectedRnd) {
                            selectedRnd.style.backgroundColor = e.currentTarget.value;
                            debouncedBgColorChange(e.currentTarget.value);
                        }
                    }}
                    value={focusedBlock?.bgColor}
                />
                <XMarkDiv>
                    <e.ZeroMarginFAIcon
                        icon={faXmark}
                        size={'2x'}
                        onClick={() => {
                            if (selectedRnd) {
                                selectedRnd.style.backgroundColor = 'transparent';
                                setBgColor('transparent');
                            }
                        }}
                    />
                </XMarkDiv>
            </e.ColorBlockWrapper>
        </e.SpecificRow1>
    );
};

export default BgColor;
