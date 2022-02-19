import React, { FunctionComponent, useState } from 'react';
import ChildThree from "./ChildThree";


interface OwnProps {

}

type Props = OwnProps;

const ParentThree: FunctionComponent<Props> = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Vishwas');
    console.log('ParentTwo Render');
    return (
        <div>
            <button onClick={() => setCount(prev => prev + 1)}>Count - {count}</button>
            <button onClick={() => setName('codevolution')}>Change Name</button>
            <ChildThree name={name}>
                <strong>Hello</strong>
            </ChildThree>
        </div>
    );
};

export default ParentThree;