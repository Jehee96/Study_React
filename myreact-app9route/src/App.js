import React from "react";
import MyTest from "./exam/Test"
import HiAbout from "./exam/About"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <h2>라우트 연습용 메인 화면</h2>
        <MyTest />

        <hr />
        {/* 메뉴 작성 : 라우팅 연습 */}
        <nav>
        {/* Link는 <a>tag(Hyperlink)로 전환 : 요청명 개념으로 이해 */}
        <Link to="/">Test 화면</Link> | {/* 아래의 Route path(/)와 매핑된다. 루트 요청이 들어오면 element의 MyTest가 수행된다. */}
        <Link to="/about">About 보기</Link> |
        </nav>

        <Routes>
          {/* 컴포넌트에서 동적 라우팅 구현 가능 */}
          <Route path="/" element={<MyTest></MyTest>}></Route>
          <Route path="/about" element={<HiAbout></HiAbout>}></Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
