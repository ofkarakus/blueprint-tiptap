import { Props } from "./types";
import * as e from './styles';
import { useRef } from "react";

const ImageUploader = (props: Props) => {
    const { setImgUrl, setIsImgUploaded, ...rest } = props
    const hiddenFileInput = useRef<HTMLInputElement>(null)

    const handleClick = () => {
        hiddenFileInput?.current?.click();
    };

    return (
        <>

            <e.Input
                type={'file'}
                onChange={(e) => {
                    setImgUrl(URL.createObjectURL(e.target.files![0]!));
                    setIsImgUploaded(true);
                }}
                accept=".png, .jpg, .jpeg"
                ref={hiddenFileInput}
                {...rest}
            />
        </>
    )
}

export default ImageUploader