import * as e from '../../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare as faSquareSolid } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { SubtoolbarProps } from '../../types';
import { useStore, useActions } from 'utils/hooks';
import { SizeInput, Select } from './styles';
import { StrokeType } from 'components/atoms/Store/Global/types';

const Stroke = ({ selectedRnd }: SubtoolbarProps) => {
    const { focusedBlock: fb } = useStore();
    const { setStrokeWidth, setStrokeType } = useActions();

    return (
        <>
            <tr>
                <td>
                    <FontAwesomeIcon icon={faSquare} />
                    Stroke:
                </td>
                <td>
                    <SizeInput
                        type={'number'}
                        min={0}
                        value={fb?.strokeWidth}
                        onChange={(e) => {
                            if (selectedRnd && fb) {
                                selectedRnd.style.border = `${e.target.value}px ${fb.strokeType} ${fb.strokeColor}`;
                                setStrokeWidth(Number(e.target.value));
                            }
                        }}
                    />{' '}
                    px
                </td>
                <td>
                    <Select
                        value={fb?.strokeType}
                        onChange={(e) => {
                            if (selectedRnd && fb) {
                                selectedRnd.style.border = `${fb.strokeWidth}px ${e.target.value} ${fb.strokeColor}`;
                                setStrokeType(e.target.value as StrokeType);
                            }
                        }}
                    >
                        <option value="dashed">dashed</option>
                        <option value="solid">solid</option>
                        <option value="none">none</option>
                    </Select>
                </td>
            </tr>
            <e.SpecificRow1>
                <td>
                    <FontAwesomeIcon icon={faSquareSolid} />
                    Stroke Colour
                </td>
                <e.ColorBlockWrapper>
                    <e.ColorBlock type={'color'} />
                </e.ColorBlockWrapper>
            </e.SpecificRow1>
        </>
    );
};

export default Stroke;
