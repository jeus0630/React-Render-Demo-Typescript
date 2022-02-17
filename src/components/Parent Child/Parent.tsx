import React, {FunctionComponent, useState} from 'react';
import Child from "./Child";


interface OwnProps {
}

type Props = OwnProps;

const Parent: FunctionComponent<Props> = (props) => {
    const [count, setCount] = useState(0);

    console.log('Parent Render');
    return (
        <div>
            <button onClick={() => setCount(prev => prev + 1)}>Count - {count}</button>
            <button onClick={() => setCount(0)}>Count to 0</button>
            <button onClick={() => setCount(5)}>Count to 5</button>
            <Child></Child>
        </div>
    );
};

export default Parent;
