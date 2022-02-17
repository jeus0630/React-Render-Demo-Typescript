import React, {FunctionComponent} from 'react';

interface OwnProps {

}

type Props = OwnProps;

const Child: FunctionComponent<Props> = (props) => {

    console.log('Child Render');

    return (
        <div>
            Child Component
        </div>
    );
};

export default Child;
