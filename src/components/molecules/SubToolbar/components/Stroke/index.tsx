import * as e from '../../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare as faSquareSolid } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

const Stroke = () => {
    return (
        <>
            <tr>
                <td>
                    <FontAwesomeIcon icon={faSquare} />
                    Stroke:
                </td>
                <td colSpan={2}>2</td>
            </tr>
            <e.SpecificRow1>
                <td>
                    <FontAwesomeIcon icon={faSquareSolid} />
                    Stroke Colour
                </td>
                <td></td>
            </e.SpecificRow1>
        </>
    );
};

export default Stroke;
