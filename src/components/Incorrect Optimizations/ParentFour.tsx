import React, { FunctionComponent, useState } from 'react';
import ChildFive from './ChildFive';



interface OwnProps {

}

type Props = OwnProps;

const ParentFour: FunctionComponent<Props> = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Vishwas');

    const person = {
        fname: 'Bruce',
        lname: 'Wayne'
    }

    console.log('ParentFur Render');
    return (  
        <div>
            <button onClick={() => setCount(prev => prev + 1)}>Count - {count}</button>
            <button onClick={() => setName('codevolution')}>Change Name</button>
            <ChildFive name={name} person={person}></ChildFive>
            {/* <ChildThree name={name}>
                <strong>Hello</strong>
            </ChildThree> */}      
        </div>
    );
};

export default ParentFour;