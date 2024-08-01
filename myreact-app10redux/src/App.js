import './App.css';
import { Component } from 'react';
import AddNumberSuper from './mydir/AddNumberSuper';
import ShowNumberSuper from './mydir/ShowNumberSuper';

class App extends Component {
  state = {number:0}

  render() {
    return (
      <div className="App">
        <h1>MAIN</h1>
        {/* 👇🏻App 소유 state 변수 number + size (AddNumberSuper가 전달한 값). size가 1 늘어날 때마다 number도 1 늘어남 */}
        {/* <AddNumberSuper onClick={function(size) {
          this.setState({number:this.state.number + size})
        }.bind(this)}></AddNumberSuper>
        App의 number : {this.state.number}
        <ShowNumberSuper number={this.state.number}></ShowNumberSuper> */}

          {/* 포함하고 있다는걸 어필!! */}
          <AddNumberSuper></AddNumberSuper>
          <ShowNumberSuper></ShowNumberSuper>

      </div>
    );
  }
}

export default App;
