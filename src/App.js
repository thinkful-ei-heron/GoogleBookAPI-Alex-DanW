import React, { Component } from 'react';
import Search from './Search';
import Filter from './Filter';
import BookResults from './BookResults';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /*
      title: "",
      author: "",
      price: "",
      description: "",
      thumbnail: "",
      id: ""
      */
      books: [],
      searchUrl: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let result = document.querySelector('#search');
    console.log('search term is ' + result.value);
  }

  handleFilterChange(val) {
    console.log('Filter change was ' + val);
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>Google Book Search</h1>
          <Search handleSubmit={this.handleSubmit} />
          <Filter handleFilterChange={this.handleFilterChange} />
        </header>
      </main>
    );
  }
}

export default App;
