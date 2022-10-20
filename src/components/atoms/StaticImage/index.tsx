import { useState } from 'react';
import FileUploader from './components/FileUploader';
import Image from './components/Image';

const StaticImage = () => {
    const [isImgUploaded, setIsImgUploaded] = useState(false);
    const [imgUrl, setImgUrl] = useState<string>();

    return (
        <>
            {isImgUploaded ? (
                <Image src={imgUrl} alt={'StaticImage'} onMouseDown={(e) => e.preventDefault()} />
            ) : (
                <FileUploader setIsImgUploaded={setIsImgUploaded} setImgUrl={setImgUrl} />
            )}
        </>
    );
};

export default StaticImage;
