import * as e from '../TextBlock/styles';

const DynamicImage = () => {
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
                <td>1</td>
                <td colSpan={2}>2</td>
            </tr>
            <e.ColorRow>
                <td>1</td>
                <td>2</td>
            </e.ColorRow>
            <e.ColorRow>
                <td>1</td>
                <td>2</td>
            </e.ColorRow>
            <tr>
                <td colSpan={3}>1</td>
            </tr>
            <tr>
                <td colSpan={3}>1</td>
            </tr>
            <tr>
                <td colSpan={3}>1</td>
            </tr>
            <tr>
                <td colSpan={3}>1</td>
            </tr>
            <tr>
                <td>1</td>
                <td colSpan={2}>2</td>
            </tr>
        </e.Table>
    );
};

export default DynamicImage;
