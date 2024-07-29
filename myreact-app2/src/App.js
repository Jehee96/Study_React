// import React, { Component, useState } from "react";
// import HookTest from "./mydir/Hooktest";
// import HookTest2 from "./mydir/Hooktest2";

// // class App extends Component { ... render() { ... return(JSX)}} <- Component는 반드시 Import를 해야한다.
// // function App() { ... return(JSX)}

// class App extends Component {
//   state = {
//     count: 0,
//   };

//   countUpdate(n) {
//     this.setState({ count: n });
//   }

//   render() {
//     const { count } = this.state; 👈count : state형 변수. const 나 let으로 변수 설정할 수 있다.
//     return (
//       <div>
//         <h3>class 컴포넌트 사용</h3>
//         number : {count} &nbsp;
//         <button onClick={() => { 👈클릭 시 카운트+1
//             this.countUpdate(count + 1);
//           }}
//         >
//           증가 1
//         </button>
//         <hr />
//         <h3>function 컴포넌트 사용</h3>
//         <HookTest />
//         <hr />
//         <h3>function 컴포넌트 사용 2</h3>
//         <HookTest2 />
//       </div>
//     );
//   }
// }

// export default App;

import React, { useState } from "react"; // state는 Hook이 지원한다. state를 써주게 되면 class를 쓰지 않고 함수형 컴포넌트를 만들 수 있다.
import HookTest from "./mydir/Hooktest";
import HookTest2 from "./mydir/Hooktest2";

const App = () => {
  const [count, setCount] = useState(0); // 여기서 count는 상태 변수(?). count 값의 변화를 위해 setCount를 꼭 써준다.
  // 👇이벤트 핸들러(처리) 함수(내장함수!)
  const countUpdate = (n) => {
    setCount(n);
  };

  return (
    <div>
      number : {count}&nbsp;
      <button onClick={() => countUpdate(count + 1)}>증가 1</button>
      <hr />
      <HookTest />
      <hr />
      <HookTest2 />
    </div>
  );
};

export default App;
