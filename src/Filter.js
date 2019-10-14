import React from 'react';

function Filter(props) {
  return (
    <div>
      <label for="print-type">Print Type</label>
      <select id="print-type">
        <option value="all">all</option>
        <option value="books">books</option>
        <option value="magazines">magazine</option>
      </select>
      <label for="filter-type">Book Type</label>
      <select id="filter-type">
        <option value="">all</option>
        <option value="ebooks">ebooks</option>
        <option value="free-ebooks">free ebooks</option>
        <option value="full">full</option>
        <option value="paid-ebooks">paid ebooks</option>
        <option value="partial">partial</option>
      </select>
    </div>
  );
}

export default Filter;
