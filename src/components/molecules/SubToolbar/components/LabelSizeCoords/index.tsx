import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faCompress, faArrowsAlt } from '@fortawesome/free-solid-svg-icons';

const LabelSizeCoords = () => {
    return (
        <>
            <tr>
                <td>
                    <FontAwesomeIcon icon={faTag} />
                    LABEL:
                </td>
                <td colSpan={2}>2</td>
            </tr>
            <tr>
                <td>
                    <FontAwesomeIcon icon={faCompress} />
                    SIZE:
                </td>
                <td>2</td>
                <td>3</td>
            </tr>
            <tr>
                <td>
                    <FontAwesomeIcon icon={faArrowsAlt} />
                    COORDS:
                </td>
                <td>2</td>
                <td>3</td>
            </tr>
        </>
    );
};

export default LabelSizeCoords;
