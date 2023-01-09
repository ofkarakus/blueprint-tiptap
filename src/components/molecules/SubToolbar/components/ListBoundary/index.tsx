import * as e from '../../styles';
import LabelSizeCoords from '../LabelSizeCoords';
import { SubtoolbarProps } from '../../types';

const ListBoundary = ({ selectedRnd }: SubtoolbarProps) => {
    return (
        <e.Table>
            <LabelSizeCoords />
        </e.Table>
    );
};

export default ListBoundary;
