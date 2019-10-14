import React from 'react';
import Description from './Description';
import "./Book.css";

function Book(props) {
  console.log(props);
  return (
    <li className="book">
      
      <img className="book-image" src={props.img} alt={props.title} />
      <div className="book-content">
      <h2>{props.title}</h2>
      <p>
        Author: &nbsp;
        {props.author.join(', ')}
      </p>
      <p>Price: &nbsp; {props.price ? props.price.amount : 'NA'}</p>
      <Description desc={props.description} />
      </div>
    </li>
  );
}

export default Book;
