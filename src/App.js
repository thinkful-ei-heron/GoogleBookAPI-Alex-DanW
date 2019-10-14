import React, { Component } from 'react';
import Search from './Search';
import Filter from './Filter';
import BookResults from './BookResults';

class App extends Component {
  state = {
    books: {}
  };

  constructor(props) {
    super(props);
  }

  getData = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.setState({
      books: {}
      })
      this.setState({
      books: data
    })}
    )
  }

  handleSubmit = (e) => {
    
    e.preventDefault();
    let result = document.querySelector('#search').value;
    let filterType = document.querySelector('#filter-type').value;
    let printType = document.querySelector('#print-type').value;
    result = result.replace(' ', '%20');
    if(filterType === ''){
      let newUrl = `https://www.googleapis.com/books/v1/volumes?q=${result}&printType=${printType}`;
      this.getData(newUrl)
    }
    else {
      let newUrl = `https://www.googleapis.com/books/v1/volumes?q=${result}&filter=${filterType}&printType=${printType}`;
      this.getData(newUrl)
    }
  }

  

  render() {
    console.log(this.state.books.items)
    return (
      <main className="App">
        <header>
          <h1>Google Book Search</h1>
          <Search handleSubmit={this.handleSubmit} />
          <Filter />
          <BookResults books={this.state.books.items} />
        </header>
      </main>
    );
  }
}

export default App;
