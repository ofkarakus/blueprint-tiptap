import * as e from '../../styles';
import LabelSizeCoords from '../LabelSizeCoords';
import Stroke from '../Stroke';
import UploadImage from '../UploadImage';
import { SubtoolbarProps } from '../../types';

const StaticImage = ({ selectedRnd }: SubtoolbarProps) => {
    return (
        <e.Table>
            <LabelSizeCoords />
            <Stroke />
            <UploadImage />
        </e.Table>
    );
};

export default StaticImage;
