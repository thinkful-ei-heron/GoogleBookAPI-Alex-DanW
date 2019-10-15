import React, { Component } from 'react';
import Search from './Search';
import Filter from './Filter';
import BookResults from './BookResults';
import './App.css';
class App extends Component {
  state = {
    books: {},
    error: null
  };


  getData = (url) => {
    fetch(url)
    .then(response => {
      if(!response.ok) {
        throw new Error('Something went wrong');
      }
      return response.json()})
    .then(data => {
      this.setState({
      books: {}
      })
      this.setState({
      books: data
    })
  }
    )
    .catch(err => {
      console.log(err.message)
      this.setState({
        error: err.message
      })
    })
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

      return(this.state.error ? <div>There was an error: {this.state.error}</div> : <main className="App">
      <header>
        <h1>Google Book Search</h1>
        <div className="search-bar">
          <Search handleSubmit={this.handleSubmit} />
        </div>
        <div className="filter-bar">
          <Filter />
        </div>
      </header>
      
      <BookResults books={this.state.books.items} />
    </main>
    )
  }
}

export default App;
