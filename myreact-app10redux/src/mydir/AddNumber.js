import React, {Component} from "react";
import Store from "../Store";

export default class AddNumber extends Component {
    state = {size:1} // 동적

    render() {
        return(
            <div>
                <h1>Add Number</h1>
                {/* Add Number Super로 끌어올리기 */}
                
                {/* <input type="button" value="+" onClick={function() {
                // 👇🏻 + 버튼 클릭 시 size값이 상위 컴포넌트로 전달될 수 있게 onClick을 구현
                // props로 전달 받은 onClick함수를 호출하는데 현재 컴포넌으틔 state인 size값을 전달한다.
                // onClick 함수는 AddNumberSuper에서 작성해 준다.
                    this.props.onClick(this.state.size) // 부모 onClick 함수를 호출
                }.bind(this)}></input>

                <input type="text" value={this.state.size} onChange={function(e) {
                    this.setState({size:Number(e.target.value)});
                }.bind(this)}></input> */}

                {/* Redux 사용 */}
                <input type="button" value="+" onClick={function() {
                    Store.dispatch({type:'INCREMENT', size:this.state.size}) // 스토어에 값을 넣어주고 변경된 값을 스토어에 저장? action에 요청 시작
                }.bind(this)}></input>

                <input type="text" value={this.state.size} onChange={function(e) {
                    this.setState({size:Number(e.target.value)});
                }.bind(this)}></input>

            </div>
        );
    }
}