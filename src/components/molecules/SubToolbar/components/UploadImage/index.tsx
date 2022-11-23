import * as e from '../../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUpload } from '@fortawesome/free-solid-svg-icons';
import { UploadBtn } from './styles';

const UploadImage = () => {
    return (
        <>
            <tr>
                <td colSpan={3}>
                    <FontAwesomeIcon icon={faCloudUpload} />
                    Upload Media
                </td>
            </tr>
            <e.SpecificRow3>
                <td>
                    <UploadBtn>Upload Picture</UploadBtn>
                </td>
            </e.SpecificRow3>
        </>
    );
};

export default UploadImage;
