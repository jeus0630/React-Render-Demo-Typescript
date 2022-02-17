import React from 'react';
import './App.css';
import ParentOne from "./components/Optimization/ParentOne";
import ChildOne from "./components/Optimization/ChildOne";

function App() {

    return (
        <div className="App">
            <ParentOne>
                <ChildOne></ChildOne>
            </ParentOne>
        </div>
    );
}

export default App;
