import React, {FunctionComponent, useReducer} from 'react';

interface OwnProps {
}

type Props = OwnProps;

type StateType = number;
type ActionType = {type: 'increment'} | {type: 'decrement'} | {type: 'reset'};

type ReducerType = (state: StateType, action: ActionType) => StateType;

const initialState = 0;

const reducer: ReducerType = (state, action) => {
    switch(action.type){
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
    }
}

const UseReducer: FunctionComponent<Props> = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    console.log('Use Reducer render');

    return (
        <div>
            {state}
            <button onClick={() => dispatch({type: 'increment'})}>Increase</button>
            <button onClick={() => dispatch({type: 'decrement'})}>Decrease</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    );
};

export default UseReducer;