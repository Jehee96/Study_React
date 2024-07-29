import React, {useState} from "react";
import Subject from "./mydir/Subject";


// const App = () => {
function App() {
  const [subject, setSubject] = useState({title:'웹문서', subtitle:'React'})
  const [friends] = useState ([
    {num:1, name:'단이', age:14},
    {num:2, name:'별이', age:7}
  ]);

  const handelChangePage = () => {
    // friends 배열값 콘솔에 출력
    friends.forEach(friend => {
      console.log(`${friend.num}번 ${friend.name}댕댕이 나이는 ${friend.age}살🐶`)
    });

    setSubject(prevSubject => ({ // 이전 상태인 prevSubject(subject)을 받아서 변환
      ...prevSubject,
      title:'버튼에 의해 제목 변경'
    }));

  }


  return (
    <div className="App">
      <h1>EVENT TEST</h1><br />
      <Subject title = {subject.title} subtitle = {subject.subtitle} onChangePage = {handelChangePage}/>
      {/* onChangePage : App에서 Subject 컴포넌트로 전달되는 이벤트 핸들러(JavaScript가 가지고 있는 Event) */}
    </div>
  );
}

export default App;
