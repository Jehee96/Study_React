import React from "react";
import MyTest from "./exam/Test";
import Gugudan from "./exam/Gugudan";
import Jikwon from "./exam/Jikwon";

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <h2 style={{ color: 'gray', fontSize:'50px'}}>MAIN</h2>

        <hr />
        <nav>
        <Link to="/">Test 화면</Link>&nbsp;|
        <Link to="/gugudan">구구단</Link>&nbsp;|
        <Link to="/jikwon">직원정보</Link>&nbsp;
        <br /><br />
        </nav>

        <Routes>
          <Route path="/" element={<MyTest/>}></Route>
          <Route path="/gugudan" element={<Gugudan/>}></Route>
          <Route path="/jikwon" element={<Jikwon/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
