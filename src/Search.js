import React from 'react';

function Search(props) {
  return (
    <form>
      <label htmlFor="search">Search:</label>
      <input type="text" name="search" id="search" placeholder="Enter Search Terms"></input>
      <button type="submit" htmlFor="search" onClick={e => props.handleSubmit(e)}>
        Submit
      </button>
    </form>
  );
}

export default Search;
