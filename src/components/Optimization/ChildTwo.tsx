import React, {FunctionComponent} from 'react';

interface OwnProps {
    name: string;
}

type Props = OwnProps;

const ChildTwo: FunctionComponent<Props> = ({name}) => {
    console.log('ChildTwo Render');
    return (
        <div>
            ChildTwo Component
        </div>
    );
};

export default React.memo(ChildTwo);
