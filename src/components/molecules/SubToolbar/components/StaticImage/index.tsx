import * as e from '../../styles';
import LabelSizeCoords from '../LabelSizeCoords';
import Stroke from '../Stroke';

const StaticImage = () => {
    return (
        <e.Table>
            <LabelSizeCoords />
            <Stroke />
            <tr>
                <td colSpan={3}>1</td>
            </tr>
            <e.SpecificRow3>
                <td>1</td>
            </e.SpecificRow3>
        </e.Table>
    );
};

export default StaticImage;
