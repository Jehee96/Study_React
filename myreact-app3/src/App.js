import './App.css';
import MyName from './mydir/MyName';

function App() {
  return (
    <div className="App">
      <h2>MAIN</h2><br />
      컴포넌트에서 사용하는 데이터는 props와 state 두 개가 있다.<br />
      props(단방향, 수정불가) : 부모 컴포넌트가 자식 컴포넌트에 주는 값이다. 자식은 받기만 한다. (양방향 X)<br />
      state(자기가 값을 가지고 있음) : 컴포넌트 내부에서 선언하며 내부에서 값을 변경할 수 있다.<br />
      <br />
      props나 state 값이 변경되면 컴포넌트를 리렌더링 된다.
      <br />
      <br />
      <hr></hr>
    <MyName />
    <br />
    <MyName name = "유제희" /* name이라는 props 값 전달 */ />
    </div>
  
    
  );
}

export default App;
