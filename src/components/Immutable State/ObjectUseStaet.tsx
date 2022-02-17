import React, {FunctionComponent, useState} from 'react';

interface OwnProps {
}

type Props = OwnProps;

const initState:{
    [index: string]: string;
} = {
    fname: 'Bruce',
    lname: 'Wayne'
}

const ObjectUseStaet: FunctionComponent<Props> = (props) => {
    const [person, setPerson] = useState(initState);

    const changeName = () => {
        // person.fname = 'Clark';
        // person.lname = 'Kent';
        // setPerson(person);
        // 주소값이 같기 때문에 리액트 알고리즘에 따라 상태감지시 같은 값으로 인지

        // const person2 = {
        //     fname: "Hello",
        //     lname: "World"
        // };
        // setPerson(person2);
        // 주소값이 다르므로 가능!

        const person3 = {
            ...person,
            fname: "Hello",
            lname: "World"
        }

        setPerson(person3);

    }

    console.log('ObjectUseState Render');

    return (
        <div>
            <button onClick={changeName}>{person.fname}{person.lname}</button>
        </div>
    );
};

export default ObjectUseStaet;
