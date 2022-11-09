import * as e from '../../styles';

const TextBlock = () => {
    return (
        <e.Table>
            <tr>
                <td>1</td>
                <td colSpan={2}>2</td>
            </tr>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
            </tr>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
            </tr>
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
