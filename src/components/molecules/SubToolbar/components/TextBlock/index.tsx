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

const TextBlock = ({ selectedRnd }: SubtoolbarProps) => {
    const { setFontColor, setBgColor } = useActions();
    const { focusedBlock } = useStore();

    const debouncedFontColorChange = useDebouncedCallback((value) => setFontColor(value), 100);
    const debouncedBgColorChange = useDebouncedCallback((value) => setBgColor(value), 100);

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
                        value={focusedBlock?.fontColor ? focusedBlock?.fontColor : '#000000'}
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
                        value={focusedBlock?.bgColor ? focusedBlock?.bgColor : '#000000'}
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
                    <SpecificFAIcon icon={faAlignLeft} />
                    <SpecificFAIcon icon={faAlignCenter} />
                    <SpecificFAIcon icon={faAlignJustify} />
                    <SpecificFAIcon icon={faAlignRight} />
                </td>
                <td>
                    <SpecificFAIcon icon={faDedent} rotation={90} />
                    <SpecificFAIcon icon={faAlignJustify} rotation={90} />
                    <SpecificFAIcon icon={faIndent} rotation={90} />
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
