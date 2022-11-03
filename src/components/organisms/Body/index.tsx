import * as e from './styles';
import MainToolbar from 'components/molecules/MainToolbar';
import Template from 'components/molecules/Template';
import { useActions } from 'utils/hooks';
import { useEffect } from 'react';
import AdditionalToolbar from 'components/molecules/AdditionalToolbar';

const Body = () => {
    const { closeContextMenu } = useActions();

    useEffect(() => {
        window.addEventListener('click', closeContextMenu);
        return () => window.removeEventListener('click', closeContextMenu);
    }, [closeContextMenu]);

    return (
        <e.Wrapper>
            <MainToolbar />
            <AdditionalToolbar />
            <Template />
        </e.Wrapper>
    );
};

export default Body;
