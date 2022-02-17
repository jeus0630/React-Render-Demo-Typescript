import React, {FunctionComponent} from 'react';

interface OwnProps {
}

type Props = OwnProps;

const ChildOne: FunctionComponent<Props> = (props) => {
    console.log('ChildOne Render');
    return (
        <div>
            ChildOne Component
        </div>
    );
};

export default ChildOne;
