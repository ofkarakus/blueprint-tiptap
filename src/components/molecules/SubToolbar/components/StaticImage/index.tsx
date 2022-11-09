import * as e from '../../styles';
import LabelSizeCoords from '../LabelSizeCoords';

const StaticImage = () => {
    return (
        <e.Table>
            <LabelSizeCoords />
            <tr>
                <td>1</td>
                <td colSpan={2}>2</td>
            </tr>
            <e.SpecificRow1>
                <td>1</td>
                <td>2</td>
            </e.SpecificRow1>
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
