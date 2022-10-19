import { useState } from 'react';
import Image from './components/Image';

const StaticImage = () => {
    const [isImgUploaded, setIsImgUploaded] = useState(false);
    const [imgUrl, setImgUrl] = useState<string>();

    return (
        <>
            {isImgUploaded ? (
                <Image src={imgUrl} alt={'StaticImage'} onMouseDown={(e) => e.preventDefault()} />
            ) : (
                <input
                    type={'file'}
                    onChange={(e) => {
                        setImgUrl(URL.createObjectURL(e.target.files![0]!));
                        setIsImgUploaded(true);
                    }}
                />
            )}
        </>
    );
};

export default StaticImage;
