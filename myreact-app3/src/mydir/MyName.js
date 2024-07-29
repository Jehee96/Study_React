import React, {Component} from "react";

/*
// 방법 01 : CLASS
class MyName extends Component {
    // static defaultProps = {
    //     name: '기본 이름'
    // }



    // {this.props.name}는 키워드다!!
    render() {
        return(
            <div>
                안녕 내 이름은 <b>{this.props.name}</b>
            </div>
        );
    }
}

// 방법 02 : CLASS
MyName.defaultProps = {
    name: '기본 이름'
}
*/


/* 방법 03 : 클래스를 함수로 소스 코드 변환 01
function MyName(props) {
    return (
        <div>
            안녕하세요 <b>{props.name}</b>
        </div>

    )
}
*/

// 방법 04 : 클래스를 함수로 소스 코드 변환 02
const MyName = ({name}) => {
    return (
        <div>
            안녕하세요 <b>{name}</b>라고 해
        </div>
    )
}

export default MyName;