import React, { useState, useEffect, useRef } from "react";

const FunctionalComponent = () => {
  const inputRef = useRef(null);
  // const divRef = useRef(null);
  const value = useRef(0);
  console.log('value:', value)
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("useEffect");
    // return () => {
    //   console.log("func.comp. willUnmount");
    // };
  }, [counter]);

  console.log('Func. Comp. Rendered')

  const increase = () => {
    setCounter(counter + 1);
    value.current = value.current + 1;
  };

  const changeBGColor = () => {
    // console.log(inputRef.current.value);
    //   const newInputTwo = document.querySelector('input');
    //   console.log(newInputTwo);
    //   newInputTwo.style.backgroundColor = text
    inputRef.current.parentElement.style.backgroundColor = text;
  };

  const handleText = (e) => {
    setText(e.target.value);
    };
    
    // const onDivBorder = () =>
    //     divRef.current.style.border='10px solid black'

  return (
    <div className="function" >
      <h2>Functional Component</h2>
      <p>Counter: {counter}</p>
      <button onClick={() => increase()}>Increase</button>

      <hr />
          <input
              id='new'
              ref={inputRef}
              type="text"
              value={text}
              onChange={handleText}
          />
      <button onClick={() => changeBGColor()}>BG Color</button>
      {/* <button onClick={() => onDivBorder()}>BORDER</button> */}
    </div>
  );
};

export default FunctionalComponent;
