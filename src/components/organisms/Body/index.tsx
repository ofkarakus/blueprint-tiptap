import * as e from './styles';
import MainToolbar from 'components/molecules/MainToolbar';
import Template from 'components/molecules/Template';
import { useActions } from 'utils/hooks';
import { useEffect } from 'react';
import AdditionalToolbar from 'components/molecules/AdditionalToolbar';
import SubToolbar from 'components/molecules/SubToolbar';

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
            <SubToolbar />
            <Template />
        </e.Wrapper>
    );
};

export default Body;
