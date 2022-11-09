import * as e from '../TextBlock/styles';

const StaticImage = () => {
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
        </e.Table>
    );
};

export default StaticImage;
