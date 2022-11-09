import * as e from '../../styles';

const Stroke = () => {
    return (
        <>
            <tr>
                <td>1</td>
                <td colSpan={2}>2</td>
            </tr>
            <e.SpecificRow1>
                <td>1</td>
                <td>2</td>
            </e.SpecificRow1>
        </>
    );
};

export default Stroke;
