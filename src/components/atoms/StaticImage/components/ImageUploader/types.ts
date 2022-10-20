import { InputProps } from 'utils/types';

export interface Props extends InputProps {
    setIsImgUploaded: React.Dispatch<React.SetStateAction<boolean>>;
    setImgUrl: React.Dispatch<React.SetStateAction<string | undefined>>;
}
