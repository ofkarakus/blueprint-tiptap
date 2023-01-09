import * as e from '../../styles';
import LabelSizeCoords from '../LabelSizeCoords';
import UploadImage from '../UploadImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeDropper, faXmark } from '@fortawesome/free-solid-svg-icons';
import { ColorTd, XMarkTd } from './styles';
import { SubtoolbarProps } from '../../types';

const Background = ({ selectedRnd }: SubtoolbarProps) => {
    return (
        <e.Table>
            <LabelSizeCoords />
            <tr>
                <td colSpan={3}>
                    <FontAwesomeIcon icon={faEyeDropper} />
                    Background Fill
                </td>
            </tr>
            <e.SpecificRow2>
                <ColorTd />
                <XMarkTd>
                    <e.ZeroMarginFAIcon icon={faXmark} size={'2x'} />
                </XMarkTd>
            </e.SpecificRow2>
            <UploadImage />
        </e.Table>
    );
};

export default Background;
