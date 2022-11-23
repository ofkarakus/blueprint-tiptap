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
} from '@fortawesome/free-solid-svg-icons';
import { SpecificFontAwesome } from './styles';

const TextBlock = () => {
    return (
        <e.Table>
            <LabelSizeCoords />
            <e.SpecificRow1>
                <td>
                    <FontAwesomeIcon icon={faAdjust} />
                    Font Colour
                </td>
                <td>2</td>
            </e.SpecificRow1>
            <e.SpecificRow1>
                <td>
                    <FontAwesomeIcon icon={faEyeDropper} />
                    Background Fill
                </td>
                <td>2</td>
            </e.SpecificRow1>
            <Stroke />
            <tr>
                <td colSpan={3}>
                    <FontAwesomeIcon icon={faAlignJustify} />
                    Alignment
                </td>
            </tr>
            <e.SpecificRow1>
                <td>
                    <SpecificFontAwesome icon={faAlignLeft} />
                    <SpecificFontAwesome icon={faAlignCenter} />
                    <SpecificFontAwesome icon={faAlignJustify} />
                    <SpecificFontAwesome icon={faAlignRight} />
                </td>
                <td>
                    <SpecificFontAwesome icon={faDedent} rotation={90} />
                    <SpecificFontAwesome icon={faAlignJustify} rotation={90} />
                    <SpecificFontAwesome icon={faIndent} rotation={90} />
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
