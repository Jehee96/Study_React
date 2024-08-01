import React, {Component} from "react";
import ShowNumber from "./ShowNumber";

export default class ShowNumberSuper extends Component {
    render() {
        return(
            <div id="super">
                <h1>Show Number Super</h1>
                {/* ShowNumberSuper의 Number : {this.props.number}
                <ShowNumber number={this.props.number}></ShowNumber> */}
            
                {/* ShoswNumberSuper는 ShowNumber를 포함하고 있다. */}
                <ShowNumber></ShowNumber>
            </div>
        );
    }
}