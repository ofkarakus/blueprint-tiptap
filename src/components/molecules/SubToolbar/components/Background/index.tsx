import * as e from '../../styles';
import LabelSizeCoords from '../LabelSizeCoords';
import UploadImage from '../UploadImage';
import { SubtoolbarProps } from '../../types';
import BgColor from '../BgColor';

const Background = ({ selectedRnd }: SubtoolbarProps) => {
    return (
        <e.Table>
            <LabelSizeCoords />
            <BgColor selectedRnd={selectedRnd} />
            <UploadImage />
        </e.Table>
    );
};

export default Background;
