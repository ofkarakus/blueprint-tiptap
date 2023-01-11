import * as e from '../../styles';
import LabelSizeCoords from '../LabelSizeCoords';
import Stroke from '../Stroke';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAdjust,
    faEyeDropper,
    faAlignJustify,
    faAlignLeft,
    faAlignCenter,
    faAlignRight,
    faDedent,
    faIndent,
    faSuperscript,
    faEyeSlash,
    faMagic,
    faHeader,
    faFont,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { SpecificFAIcon, XMarkDiv } from './styles';
import { useActions, useStore } from 'utils/hooks';
import { useDebouncedCallback } from 'use-debounce';
import { SubtoolbarProps } from '../../types';
import { HorizontalAlignment, VerticalAlignment } from 'components/atoms/Store/Global/types';

const TextBlock = ({ selectedRnd }: SubtoolbarProps) => {
    const { setFontColor, setBgColor, setVerticalAlignment, setHorizontalAlignment } = useActions();
    const { focusedBlock } = useStore();

    const debouncedFontColorChange = useDebouncedCallback((value) => setFontColor(value), 100);
    const debouncedBgColorChange = useDebouncedCallback((value) => setBgColor(value), 100);

    const onVerAlignChange = (value: VerticalAlignment) => {
        if (selectedRnd) {
            selectedRnd.style.alignItems = value;
            setVerticalAlignment(value);
        }
    };
    const onHorAlignChange = (value: HorizontalAlignment) => {
        if (selectedRnd) {
            selectedRnd.style.justifyContent = value;
            setHorizontalAlignment(value);
        }
    };

    return (
        <e.Table>
            <LabelSizeCoords />
            <e.SpecificRow1>
                <td>
                    <FontAwesomeIcon icon={faAdjust} />
                    Font Colour
                </td>
                <e.ColorBlockWrapper>
                    <e.ColorBlock
                        type={'color'}
                        onInput={(e) => debouncedFontColorChange(e.currentTarget.value)}
                        value={focusedBlock?.fontColor}
                    />
                </e.ColorBlockWrapper>
            </e.SpecificRow1>
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
            <Stroke selectedRnd={selectedRnd} />
            <tr>
                <td colSpan={3}>
                    <FontAwesomeIcon icon={faAlignJustify} />
                    Alignment
                </td>
            </tr>
            <e.SpecificRow1>
                <td>
                    <SpecificFAIcon
                        icon={faAlignLeft}
                        $selected={focusedBlock?.horizontalAlignment === 'start'}
                        onClick={() => onHorAlignChange('start')}
                    />
                    <SpecificFAIcon
                        icon={faAlignCenter}
                        $selected={focusedBlock?.horizontalAlignment === 'center'}
                        onClick={() => onHorAlignChange('center')}
                    />
                    <SpecificFAIcon
                        icon={faAlignJustify}
                        $selected={focusedBlock?.horizontalAlignment === 'stretch'}
                        onClick={() => onHorAlignChange('stretch')}
                    />
                    <SpecificFAIcon
                        icon={faAlignRight}
                        $selected={focusedBlock?.horizontalAlignment === 'end'}
                        onClick={() => onHorAlignChange('end')}
                    />
                </td>
                <td>
                    <SpecificFAIcon
                        icon={faDedent}
                        rotation={90}
                        $selected={focusedBlock?.verticalAlignment === 'start'}
                        onClick={() => onVerAlignChange('start')}
                    />
                    <SpecificFAIcon
                        icon={faAlignJustify}
                        rotation={90}
                        $selected={focusedBlock?.verticalAlignment === 'center'}
                        onClick={() => onVerAlignChange('center')}
                    />
                    <SpecificFAIcon
                        icon={faIndent}
                        rotation={90}
                        $selected={focusedBlock?.verticalAlignment === 'end'}
                        onClick={() => onVerAlignChange('end')}
                    />
                </td>
            </e.SpecificRow1>
            <tr>
                <td>
                    <FontAwesomeIcon icon={faSuperscript} />
                    Size:
                </td>
                <td colSpan={2}>2</td>
            </tr>
            <tr>
                <td>
                    <FontAwesomeIcon icon={faEyeSlash} />
                    Hide:
                </td>
                <td colSpan={2}>2</td>
            </tr>
            <tr>
                <td>
                    <FontAwesomeIcon icon={faMagic} />
                    Shrink:
                </td>
                <td colSpan={2}>2</td>
            </tr>
            <tr>
                <td>
                    <FontAwesomeIcon icon={faHeader} />
                    Caps:
                </td>
                <td colSpan={2}>2</td>
            </tr>
            <tr>
                <td colSpan={3}>
                    <FontAwesomeIcon icon={faFont} />
                    Font Family
                </td>
            </tr>
        </e.Table>
    );
};

export default TextBlock;
