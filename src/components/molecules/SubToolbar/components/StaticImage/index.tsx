import * as e from '../../styles';
import LabelSizeCoords from '../LabelSizeCoords';
import Stroke from '../Stroke';
import UploadImage from '../UploadImage';

const StaticImage = () => {
    return (
        <e.Table>
            <LabelSizeCoords />
            <Stroke />
            <UploadImage />
        </e.Table>
    );
};

export default StaticImage;
