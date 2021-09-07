import React from "react";

// function FunctionalComponent(props) {
//     return (
//         <div>
//             <h1>Functional Component</h1>
//             <p>{props.name}</p>
//          </div>
//      )
// }

// destruct
function FunctionalComponent({name}) {
    return (
        <div>
            <h1>Functional Component</h1>
            <p>{name}</p>
         </div>
     )
}
 
export default FunctionalComponent;