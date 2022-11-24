import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faCompress, faArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import { useStore } from 'utils/hooks';
import { LabelInput } from './styles';

const LabelSizeCoords = () => {
    const { focusedBlock } = useStore();

    return (
        <>
            <tr>
                <td>
                    <FontAwesomeIcon icon={faTag} />
                    Label:
                </td>
                <td colSpan={2}>
                    <LabelInput value={focusedBlock?.label} />
                </td>
            </tr>
            <tr>
                <td>
                    <FontAwesomeIcon icon={faCompress} />
                    Size:
                </td>
                <td>2</td>
                <td>3</td>
            </tr>
            <tr>
                <td>
                    <FontAwesomeIcon icon={faArrowsAlt} />
                    Coords:
                </td>
                <td>2</td>
                <td>3</td>
            </tr>
        </>
    );
};

export default LabelSizeCoords;
