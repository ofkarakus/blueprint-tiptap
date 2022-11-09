import * as e from '../../styles';

const Background = () => {
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
            <tr>
                <td colSpan={3}>1</td>
            </tr>
            <e.SpecificRow3>
                <td>1</td>
            </e.SpecificRow3>
        </e.Table>
    );
};

export default Background;
