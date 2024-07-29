import React, {Component} from 'react';

class subject extends Component {
    render() {
        const clickHandler = () => {
            console.log('두번째 버튼 클릭 성공');
        }

        // 텍스트 박스의 키업 이벤트 핸들러(눌렀다 땠을 때 발생)
        const keyUpHandler = (e) => {
            console.log('텍스트 키업 이벤트 성공');
            console.log('입력한 값 : ', e.target.value);
        }

        return(
            <header>
                <h1>머리글 : {this.props.title}</h1>
                {this.props.subtitle}
                <br />
                BUTTON EVENT : 
                <br /><br />
                <button onClick={
                    function(){
                        this.props.changePage();
                    }.bind(this)
                }>{this.props.title}</button>

                <br /><br />
                <button onClick={clickHandler}>두번째 버튼</button>

                <br /><br />
                <input type="text" onKeyUp={keyUpHandler}/>
            </header>
        );
    }
}

export default subject;