import React, { Component } from 'react';
import './CounterStyle.css';

export default class Counter extends Component {
    constructor(){    
        super();
        this.state = {
          name: "Ali",
          count: 0,
        };
        console.log("constructor");
    };

    increase = () => {
        this.setState({count:this.state.count + 1})
    }

    decrease = () => {
        this.setState({count:this.state.count - 1});
    };

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps", state);
        return null
    }

    shouldComponentUpdate() {
        console.log("Should update???");
        return true; //true olursa update'e izin verir; false olursa izin vermez.
    }

    componentDidMount = () => {
        console.log("Component Mounted!");
        console.log("------------------------")
    }

    componentDidUpdate = () => {
    console.log("Updated")
    }
    
    getSnapshotBeforeUpdate(prevprops, prevstate) {
        console.log("snapshot", prevstate)
        return null
    }

    componentWillUnmount() {
        console.log("will unmount bye!!!")
    }

    render() {
        console.log("Render")
        return (
            <div className="container">
                <p>Counter: { this.state.count}</p>
                <button onClick={()=>this.increase()}>Arttır</button>
                <button onClick={()=>this.decrease()}>Azalt</button>
            </div>
        )
    }
}


