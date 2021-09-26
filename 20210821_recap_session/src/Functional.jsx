import React, {useState, useEffect} from 'react'

function Functional() {
    const [count, setCount] = useState(0)
    const [empty, setEmpty] = useState(0)
    const [full, setFull] = useState(0)

    const increment = () => {
        setCount(count+1)
    }
    const decrement = () => {
        if(count>0){
            setCount(count - 1)
        }
    }

useEffect(() => {
    console.log("useEffect");
    return ()=> console.log("Bye Bye!");
}, [empty, full])

    return (
        <div>
            <button onClick={increment}>+</button>
            <h1>{ count }</h1>
            <button onClick={decrement}>-</button>
            <br />
            <h1>Empty</h1>
            <button onClick={()=>setEmpty(empty+1)}>+</button>
            <h1>{ empty }</h1>
            <h1>Full</h1>
            <button onClick={()=>setFull(full+1)}>+</button>
            <h1>{ full }</h1>
            
        </div>
    )
}

export default Functional
