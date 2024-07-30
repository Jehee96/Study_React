import Clock01 from "./exam/Clock01";
import Clock02 from "./exam/Clock02";
import Clock03 from "./exam/Clock03";
import MyComponent from "./exam/MyComponent";
import MyComponent02 from "./exam/MyComponent02";
import MyForm from "./exam/MyForm";


function App() {
  return (
    <>
    <h2>React Life Cycle Exam : 디지털 시계</h2>
    <Clock01 />
    <hr />
    <Clock02 />
    <hr />
    <Clock03 />
    <hr />
    <MyComponent />
    <hr />
    <MyComponent02 />
    <hr />
    생명주기와 상관 없음. Form 작업(사용자와 웹 페이지 간 상호 작용)<br />
    <hr />
    <MyForm />
    </>
  );
}

export default App;
