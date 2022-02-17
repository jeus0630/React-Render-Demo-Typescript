import React, {FunctionComponent, useState} from 'react';

interface OwnProps {
}

type Props = OwnProps;

const initState = ['Bruce','Wayne'];

const ArrayUseState: FunctionComponent<Props> = (props) => {
    const [persons, setPersons] = useState(initState);

    const handleClick = () => {
        const newPersons = [...persons];
        newPersons.push('Clark');
        newPersons.push('Kent');
        setPersons(newPersons);
    }

    console.log('ArrayUseState Render');

    return (
        <div>
            <button onClick={handleClick}>Click</button>
            {
                persons.map(person => (
                    <div key={person}>{person}</div>
                ))
            }
        </div>
    );
};

export default ArrayUseState;
