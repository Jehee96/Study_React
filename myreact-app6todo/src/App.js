import React, {useState} from "react";

function TodoList({items}) { // 할 일 목록 출력용
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.text}</li>  // key={item.id} : 👈줄 수도, 안 줄수도 있음
      ))}
    </ul>
  );
}


function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');

   // 텍스트 수정
  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.length === 0) {
      return; // 입력값 없으면 작업 안함
    }

    const newItems = {
      text:text,
      id:Date.now(), // 👈줄 수도, 안 줄수도 있음
    };

    setItems((prevItems) => [...prevItems, newItems]);
    setText('');
  }



  return (
    <div className="App">
      <h2>📜 오늘 할 일 적기 ✏️</h2>
      <TodoList items={items} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">알아서 하든가🙄</label>
        <br />
        <input id="todo" onChange={handleChange} value={text} /> 
        &nbsp;&nbsp;
        <button>🖱️클릭 #{items.length}</button>
      </form>
    </div>
  );
}

export default App;
