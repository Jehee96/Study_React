import React, {useState} from "react";
import Child from "./mydir/Child";

function App() {
  // App 컴포넌트(함수)가 호출될 때 함수 내의 내용을 차례대로 수행(렌더링)
  // 리액트는 부모 컴포넌트가 렌더링될 때 자식 컴포넌트 또한 렌더링 된다.
  // 성능 최적화를 목적으로 컴포넌트에서 필요한 상황에서만 자식 컴포넌트가 리렌더링에 참여할 수 있도록 React.memo 함수를 제공한다.

  const [fatherAge, setFatherAge] = useState(56);
  const [childAge, setChildAge] = useState(7);


  // 아빠 나이 변경 이벤트 핸들러
  const changefatherAge = () => {
    setFatherAge(fatherAge + 1);
  }

  // 자녀 나이 변경 이벤트 핸들러
  const changeChildAge = () => {
    setChildAge(childAge + 1);
  }

  console.log('아빠 나이가 변경됨 - 렌더링');

  const boxstyle = {border:'2px solid', padding:'10px'}
  return (
    <div style={boxstyle}>
      <h1>🐵 아빠(유해진)</h1>
      <span>나이 : {fatherAge}</span>&nbsp;&nbsp;
      <button onClick={changefatherAge}>아빠 나이 변경</button>
      <hr />
      <Child name={'유 별'} age={childAge}></Child>
      <br />
      <button onClick={changeChildAge}>자녀 나이 변경</button>
    </div>
  );
}

export default App;
