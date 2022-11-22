import { useState, useMemo } from 'react';
import * as e from './styles';
import { useStore, useActions } from 'utils/hooks';

const AdditionalToolbar = () => {
    const [isOnline, setOnline] = useState(false);
    const { isMTbarVisible, blocks } = useStore();
    const { setFocusedBlockId } = useActions();

    const sortedBlockArr = useMemo(() => [...blocks].sort((a, b) => a.id - b.id), [blocks]);

    return (
        <e.Wrapper $isMTbarVisible={isMTbarVisible}>
            <div>
                <span>
                    <e.Select onChange={(e) => setFocusedBlockId(Number(e.target.value))}>
                        <option disabled selected label={`Browse Shapes (${blocks.length})`} />
                        {sortedBlockArr.map((el) => (
                            <option label={el.label} value={el.id} key={el.id} />
                        ))}
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
