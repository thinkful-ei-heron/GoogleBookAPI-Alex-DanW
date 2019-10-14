import React from 'react';

function Book(props) {
  console.log(props)
  return(
  <li>
    {props.title}
  </li>
  )
}

export default Book;