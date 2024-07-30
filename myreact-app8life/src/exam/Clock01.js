//import React, { Component } from "react";
import React from "react";

//class Clock01 extends Component {}
class Clock01 extends React.Component {
//     constructor(props) {
//         super(props);
//     };

    render() {
        return (
            <div>
                <h1>🖐🏻</h1>
                <h2>지금은 {new Date().toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Clock01;