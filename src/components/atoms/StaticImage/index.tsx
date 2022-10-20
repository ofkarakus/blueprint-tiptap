import { useState } from 'react';
import ImageUploader from './components/ImageUploader';
import Image from './components/Image';

const StaticImage = () => {
    const [isImgUploaded, setIsImgUploaded] = useState(false);
    const [imgUrl, setImgUrl] = useState<string>();

    return (
        <>
            {isImgUploaded ? (
                <Image src={imgUrl} alt={'StaticImage'} onMouseDown={(e) => e.preventDefault()} />
            ) : (
                <ImageUploader setIsImgUploaded={setIsImgUploaded} setImgUrl={setImgUrl} />
            )}
        </>
    );
};

export default StaticImage;
