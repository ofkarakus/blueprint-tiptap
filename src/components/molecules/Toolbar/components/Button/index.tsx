import * as e from './styles';
import { DivProps } from 'utils/types';
import { ReactElement, SVGProps, useState } from 'react';

const Button = (props: DivProps & { icon: (props: SVGProps<SVGSVGElement>) => ReactElement }) => {
    const { icon: Icon, ...rest } = props;
    const [dimensions, setDimensions] = useState({ width: 15, height: 15 });

    return (
        <e.Wrapper
            onMouseEnter={() => setDimensions({ width: 25, height: 25 })}
            onMouseLeave={() => setDimensions({ width: 15, height: 15 })}
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
