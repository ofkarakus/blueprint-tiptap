import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faCompress, faArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import { useStore, useActions } from 'utils/hooks';
import { LabelInput, SizeInput, SizeSpan } from './styles';

const LabelSizeCoords = () => {
    const { focusedBlock } = useStore();
    const { setLabel } = useActions();

    return (
        <>
            <tr>
                <td>
                    <FontAwesomeIcon icon={faTag} />
                    Label:
                </td>
                <td colSpan={2}>
                    <LabelInput
                        value={focusedBlock?.label}
                        onChange={(e) => setLabel(e.target.value)}
                    />
                </td>
            </tr>
            <tr>
                <td>
                    <FontAwesomeIcon icon={faCompress} />
                    Size:
                </td>
                <td>
                    <SizeSpan>h</SizeSpan>
                    <SizeInput type={'number'} value={focusedBlock?.size.height} />
                </td>
                <td>
                    <SizeSpan>w</SizeSpan>
                    <SizeInput type={'number'} value={focusedBlock?.size.width} />
                </td>
            </tr>
            <tr>
                <td>
                    <FontAwesomeIcon icon={faArrowsAlt} />
                    Coords:
                </td>
                <td>
                    <SizeSpan>x</SizeSpan>
                    <SizeInput type={'number'} value={focusedBlock?.coords.x} />
                </td>
                <td>
                    <SizeSpan>y</SizeSpan>
                    <SizeInput type={'number'} value={focusedBlock?.coords.y} />
                </td>
            </tr>
        </>
    );
};

export default LabelSizeCoords;
