import React, { FunctionComponent, useState } from 'react';
import ChildTwo from './ChildTwo';

interface OwnProps {

}

type Props = OwnProps;

const ParentTwo: FunctionComponent<Props> = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Vishwas');
    console.log('ParentTwo Render');
    return (
        <div>
            <button onClick={() => setCount(prev => prev + 1)}>Count - {count}</button>
            <button onClick={() => setName('codevolution')}>Change Name</button>
            <ChildTwo name={name}></ChildTwo>
        </div>
    );
};

export default ParentTwo;