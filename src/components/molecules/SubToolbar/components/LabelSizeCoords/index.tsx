import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faCompress, faArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import { useStore, useActions } from 'utils/hooks';
import { LabelInput, SizeInput, SizeSpan } from './styles';
import { Size, Coords } from 'components/atoms/Store/Global/types';

const LabelSizeCoords = () => {
    const { focusedBlock } = useStore();
    const { setLabel, setSize, setCoords } = useActions();

    const onSizeChange = (size: Size) => {
        setSize(size);
        focusedBlock?.ref.current?.updateSize(size);
    };

    const onCoordsChange = (coords: Coords) => {
        setCoords(coords);
        focusedBlock?.ref.current?.updatePosition(coords);
    };

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
                    <SizeInput
                        type={'number'}
                        value={focusedBlock?.size.height}
                        onChange={(e) =>
                            onSizeChange({
                                width: focusedBlock?.size.width!,
                                height: Number(e.target.value),
                            })
                        }
                    />
                </td>
                <td>
                    <SizeSpan>w</SizeSpan>
                    <SizeInput
                        type={'number'}
                        value={focusedBlock?.size.width}
                        onChange={(e) =>
                            onSizeChange({
                                width: Number(e.target.value),
                                height: focusedBlock?.size.height!,
                            })
                        }
                    />
                </td>
            </tr>
            <tr>
                <td>
                    <FontAwesomeIcon icon={faArrowsAlt} />
                    Coords:
                </td>
                <td>
                    <SizeSpan>x</SizeSpan>
                    <SizeInput
                        type={'number'}
                        value={focusedBlock?.coords.x}
                        onChange={(e) =>
                            onCoordsChange({
                                x: Number(e.target.value),
                                y: focusedBlock?.coords.y!,
                            })
                        }
                    />
                </td>
                <td>
                    <SizeSpan>y</SizeSpan>
                    <SizeInput
                        type={'number'}
                        value={focusedBlock?.coords.y}
                        onChange={(e) =>
                            onCoordsChange({
                                x: focusedBlock?.coords.x!,
                                y: Number(e.target.value),
                            })
                        }
                    />
                </td>
            </tr>
        </>
    );
};

export default LabelSizeCoords;
