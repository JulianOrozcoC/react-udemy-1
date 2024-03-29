import React, { Component } from 'react';
import { CardList } from './components/CardList/CardList.jsx';
import { SearchBox } from './components/SearchBox/SearchBox.jsx';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  async componentDidMount() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    response = await response.json();
    this.setState({ monsters: response });
  }

  handleChange = event => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox
          placeholder="Search monster"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
    </div>
    );
  }
}

export default App;
