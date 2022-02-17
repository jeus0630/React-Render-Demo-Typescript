import * as React from 'react';
import { useState } from 'react';
import ChildOne from './ChildOne';
import ParentOne from './ParentOne';

interface IGrandParentProps {
}

const GrandParent: React.FunctionComponent<IGrandParentProps> = (props) => {
    const [newCount, setNewCount] = useState(0);
    
    return (
        <div> 
            <button onClick={() => {setNewCount(prev => prev + 1)}}>GrandParent Count - {newCount}</button>
            <ParentOne>
                <ChildOne></ChildOne>
            </ParentOne>
        </div>
    );
};

export default GrandParent;
