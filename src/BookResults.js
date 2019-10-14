import React, { Component } from 'react';
import Book from './Book';
import './BookResults.css';

class BookResults extends Component {

  render() {
    console.log(this.props);
    
    if(!this.props.books){
      return(
        <div></div>
      )
    }
    else {
    console.log(this.props.books)
    this.props.books.map(item => console.log(item.id))
    return (
      <ul className="book-results">
        {this.props.books.map(item => <Book
              key={item.id}
              title={item.volumeInfo.title}
              description={item.volumeInfo.description}
              img={item.volumeInfo.imageLinks.smallThumbnail}
              author={item.volumeInfo.authors}
              price={item.saleInfo.listPrice}
        />)}
      </ul>
    );
  }
  }
}

export default BookResults;
