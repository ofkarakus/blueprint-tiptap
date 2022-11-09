import * as e from '../../styles';
import LabelSizeCoords from '../LabelSizeCoords';

const TextBlock = () => {
    return (
        <e.Table>
            <LabelSizeCoords />
            <e.SpecificRow1>
                <td>1</td>
                <td>2</td>
            </e.SpecificRow1>
            <e.SpecificRow1>
                <td>1</td>
                <td>2</td>
            </e.SpecificRow1>
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
            <e.SpecificRow1>
                <td>1</td>
                <td>2</td>
            </e.SpecificRow1>
            <tr>
                <td>1</td>
                <td colSpan={2}>2</td>
            </tr>
            <tr>
                <td>1</td>
                <td colSpan={2}>2</td>
            </tr>
            <tr>
                <td>1</td>
                <td colSpan={2}>2</td>
            </tr>
            <tr>
                <td>1</td>
                <td colSpan={2}>2</td>
            </tr>
            <tr>
                <td colSpan={3}>1</td>
            </tr>
        </e.Table>
    );
};

export default TextBlock;
