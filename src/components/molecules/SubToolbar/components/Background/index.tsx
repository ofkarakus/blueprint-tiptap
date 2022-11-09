import * as e from '../../styles';
import LabelSizeCoords from '../LabelSizeCoords';
import UploadImage from '../UploadImage';

const Background = () => {
    return (
        <e.Table>
            <LabelSizeCoords />
            <tr>
                <td colSpan={3}>1</td>
            </tr>
            <tr>
                <td colSpan={3}>1</td>
            </tr>
            <e.SpecificRow2>
                <td>1</td>
                <td>2</td>
            </e.SpecificRow2>
            <UploadImage />
        </e.Table>
    );
};

export default Background;
