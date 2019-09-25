import * as React from 'react';
import Hello from './components/Hello'
import List from './pages/List'

class App extends React.Component {
  public myClickHandler(data: string) {
    console.log(data);
  }
  public render() {
    return (
      <div className="App">
        <p>Hello React TypeScript</p>
        <Hello title = '标题' age = { 20 } onMyClick = { this.myClickHandler } />
        <List />
      </div>
    );
  }
}

export default App;
