import { useState } from 'react';
import * as e from './styles';
import { useStore } from 'utils/hooks';

const AdditionalToolbar = () => {
    const [isOnline, setOnline] = useState(false);
    const { areToolbarsVisible } = useStore();

    return (
        <e.Wrapper $isVisible={areToolbarsVisible}>
            <div>
                <span>
                    <e.Select>
                        <option value="">Browse Shapes (0)</option>
                    </e.Select>
                </span>
            </div>
            <div>
                <e.HandleShift
                    $isOnline={isOnline}
                    onClick={() => setOnline((prevState) => !prevState)}
                />
                <e.OnlineStatus onClick={() => setOnline((prevState) => !prevState)}>
                    Live
                </e.OnlineStatus>
                <e.OfflineStatus onClick={() => setOnline((prevState) => !prevState)}>
                    Draft
                </e.OfflineStatus>
            </div>
        </e.Wrapper>
    );
};

export default AdditionalToolbar;
