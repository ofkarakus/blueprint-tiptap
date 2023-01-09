import * as e from '../../styles';
import LabelSizeCoords from '../LabelSizeCoords';
import Stroke from '../Stroke';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompress, faBullseye, faSubscript } from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare, faSquare } from '@fortawesome/free-regular-svg-icons';
import { BorderlessTr, ImgTd } from './styles';
import { SubtoolbarProps } from '../../types';

const DynamicImage = ({ selectedRnd }: SubtoolbarProps) => {
    return (
        <e.Table>
            <LabelSizeCoords />
            <Stroke selectedRnd={selectedRnd} />
            <e.SpecificRow1>
                <td>
                    <FontAwesomeIcon icon={faCompress} />
                    Aspect Ratio:
                </td>
                <td>2</td>
            </e.SpecificRow1>
            <tr>
                <td colSpan={3}>
                    <FontAwesomeIcon icon={faBullseye} />
                    Image
                </td>
            </tr>
            <BorderlessTr>
                <ImgTd colSpan={3} $background={'rgb(248,248,248)'}>
                    <FontAwesomeIcon icon={faCheckSquare} />
                    EPC
                </ImgTd>
            </BorderlessTr>
            <BorderlessTr>
                <ImgTd colSpan={3} $background={'rgb(254,254,254)'}>
                    <FontAwesomeIcon icon={faSquare} />
                    Floor Plan
                </ImgTd>
            </BorderlessTr>
            <tr>
                <ImgTd colSpan={3} $background={'rgb(248,248,248)'}>
                    <FontAwesomeIcon icon={faSquare} />
                    Photograph
                </ImgTd>
            </tr>
            <tr>
                <td>
                    <FontAwesomeIcon icon={faSubscript} />
                    Index:
                </td>
                <td colSpan={2}>2</td>
            </tr>
        </e.Table>
    );
};

export default DynamicImage;
