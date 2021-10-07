import React from 'react';
import '../App.css';
import { useSelector } from 'react-redux';

const ComponentB = () => {
    const myCounter = useSelector((state)=>state.counter)
    return (
        <div className='App' style={{backgroundColor:'blue', height:'35vh'}}>
            <h2>ComponentB</h2>
            <h2>Count: { myCounter}</h2>
        </div>
    )
}

export default ComponentB
