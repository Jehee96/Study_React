/* eslint-disable*/

import './App.css';
import React, {useState} from 'react';

function App() {
  let name = '제희의 쌈@뽕한 JSX 사용법 : 일반 데이터'


  // state 데이터
  // state는 변수이다.const, let 등으로 선언한 변수와 다르게
  // 값이 변하면 관련 있는 컴포넌트들이 재렌더링되어 화면이 바뀐다.
  let [title, setTitleFunc] = useState('JavaScript'); // 문자열을 기억
  let [title2, setTitleFunc2] = useState(['리액트', '뷰']); // 배열 자료 기억


  // 이벤트 처리 함수 01
  function dataUpdate() {
    // let newArr = [...title]; // 전개 연산자에 의해 문자열이 낱개 문자로 분리돼 배열로 복사
    // console.log(newArr);
    title = 'Hello, Rreact🤯';
    setTitleFunc(title); // title state는 setTitleFunc 함수로 값을 수정한다.
    console.log(title);
  }


    // 이벤트 처리 함수 02
    function dataUpdate2() {
      let newArr = [...title2]; // 배열의 일부 수정을 위해 전개 연산자로 복사
      console.log(newArr);
      newArr[1] = "뷰~우웅..~" // newArr[1] 값 변경
      setTitleFunc2(newArr);   // title2 값을 변경하기 위해 setTitleFunc2 함수 사용
  }

  // 이벤트 처리 03
  let [count, setCount] = useState(0);


  return (
    <div className="App">
      <div className='blue_bar'>
        <h1>React State 이해 (Hook이 제공 : useState)</h1>
      </div>

      <div className='list'>
        <h2>{title}</h2>
        <p>state 확인</p>
        <span>{name}</span>
        <br /><br />
        <button onClick={dataUpdate}>title 값 변경</button>
      </div>

      <br /><br />
      <div className='list'>
        <h3>title2[0] : {title2[0]}</h3>
        <h3>title2[1] : {title2[1]}</h3>
        <p>state 확인</p>
        <br />
        <button onClick={dataUpdate2}>title2 값 변경</button>
      </div>
      <br />

      <div>
        이모티콘 클릭 : <h1><span onClick={
                 // 카운트 값 늘리기
          () => {setCount(count + 1)}}>🙈</span></h1>{count}번 클릭
      </div>

    </div>
  );
}

export default App;
