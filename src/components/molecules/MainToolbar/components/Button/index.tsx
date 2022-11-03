import * as e from './styles';
import { DivProps } from 'utils/types';
import { useState } from 'react';
import { Tool } from './types';

const Button = (props: DivProps & { tool: Tool }) => {
    const {
        tool: { icon: Icon, description },
        ...rest
    } = props;

    const [dimensions, setDimensions] = useState({ width: 15, height: 15 });
    const [isTooltipVisible, setTooltipVisible] = useState(false);

    return (
        <e.Wrapper
            onMouseEnter={() => {
                setDimensions({ width: 25, height: 25 });
                setTooltipVisible(true);
            }}
            onMouseLeave={() => {
                setDimensions({ width: 15, height: 15 });
                setTooltipVisible(false);
            }}
            $isTooltipVisible={isTooltipVisible}
            name={description}
            {...rest}
        >
            <Icon
                width={dimensions.width}
                height={dimensions.height}
                style={{ transition: 'all .4s' }}
            />
        </e.Wrapper>
    );
};

export default Button;
