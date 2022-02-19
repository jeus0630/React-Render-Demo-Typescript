import React, {FunctionComponent} from 'react';

interface OwnProps {
    children: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    name: string;
}

type Props = OwnProps;

const ChildThree: FunctionComponent<Props> = ({name, children}) => {
    console.log('ChildThree Render');
    return (
        <div>
            {children} {name}
        </div>
    );
};

export default React.memo(ChildThree);
