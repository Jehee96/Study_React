import React, {memo} from "react";

const boxstyle = {border:'1px solid red', padding:'20px'}

//function Child({name, age}){...}
const Child = ({name, age}) => {
    console.log('자녀 나이 바뀜(렌더링)');

    // props
    return (
        <div style={boxstyle}>
            <h2>🐭 자녀01</h2>
            <p>이름 : 유제희</p>
            <p>나이 : 28</p>

            <h2>🐶 자녀02</h2>
            <p>이름 : {name}</p>
            <p>나이 : {age}</p>
        </div>
        
    );
}

//export default Child;
export default memo(Child); // 반환 컴포넌트를 memo함수로 감싸주면 memo 기능이 활성화 된다.
