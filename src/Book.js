import React from 'react';
import Description from './Description';

function Book(props) {
  console.log(props);
  return (
    <li>
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <p>
        Author: &nbsp;
        {props.author.join(', ')}
      </p>
      <p>Price: &nbsp; {props.price ? props.price.amount : 'NA'}</p>
      <Description desc={props.description} />
    </li>
  );
}

export default Book;
