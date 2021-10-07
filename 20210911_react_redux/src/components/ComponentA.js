import React from 'react'
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import { arttır, eksilt, reset } from '../redux/actions';

const ComponentA = () => {
    const myCounter = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    return (
        <div className='App' style={{backgroundColor:'yellow', height:'35vh'}}>
            <h2>ComponentA</h2>
            <h2>Count: {myCounter} </h2>
            <button onClick={()=>dispatch(arttır())}>Increase</button>
            <button onClick={() => dispatch({ type: 'DECREASE_COUNTER' })}>Decrease</button>
            <br/>
            <button style={{margin: '5px', padding:'5px'}} onClick={()=>dispatch({type:'RESET_COUNTER', payload:5})}>Reset</button>
        </div>
    )
}

export default ComponentA;
