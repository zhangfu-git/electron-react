import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        React Pages
        <h1>my name is zhangfu</h1>
        <button onClick={() => alert('😍')}>开启新的旅程</button>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));