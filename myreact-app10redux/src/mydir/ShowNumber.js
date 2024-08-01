import React, {Component} from "react";
import Store from "../Store";

export default class ShowNumber extends Component {
    state = {number:Store.getState().number}

    // 필요한 곳에서 땡겨?쓰기 : 스토어 저장, 스토어 호출
    constructor(props) {
        super(props);

        Store.subscribe(function() {
            this.setState({number:Store.getState().number});
        }.bind(this));
    }

    
    render() {
        return(
            <div>
                <h1>Show Number</h1>
                {/* <input type="text" value={this.props.number} readOnly></input> */} {/* ShowNumberSuper가 넘겨준 number */}
                <input type="text" value={this.state.number} readOnly></input>
            </div>
        );
    }
}