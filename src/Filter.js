import React from 'react';

function Filter(props) {
  return (
    <select onChange={e => props.handleFilterChange(e.target.value)}>
      <option value="all">all</option>
      <option value="books">books</option>
      <option value="magazine">magazine</option>
    </select>
  );
}

export default Filter;
