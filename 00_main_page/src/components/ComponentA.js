import React from 'react'
import '../App.css';
import {useSelector} from 'react-redux'

const ComponentA = () => {
    const myCounter = useSelector((state)=>state.counter)
    return (
        <div className='App' style={{backgroundColor:'yellow', height:'35vh'}}>
            <h2>ComponentA</h2>
            <h2>Count: {myCounter} </h2>
            <button>Increase</button>
            <button>Decrease</button>
        </div>
    )
}

export default ComponentA;
