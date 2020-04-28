import React, { Component } from 'react';
import { CardList } from './components/CardList/CardList.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    }
  }

  async componentDidMount() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    response = await response.json();
    this.setState({ monsters: response });
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
    </div>
    );
  }
}

export default App;
