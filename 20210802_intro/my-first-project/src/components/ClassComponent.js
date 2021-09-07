import React from "react";

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {surname: "Clarusway"}
    }
    render() {
        return (
            <div className="wrapper">
                <div>
                    <h1>CLARUSWAY</h1>
                    <p>Class Component</p>
                    <p>{this.props.name}</p>
                    <p>{this.state.surname}</p>
                </div>                
            </div>
            
        )
    }
}

export default ClassComponent;