import React from 'react';

function Filter({ filter, getFilterName }) {
  return (
    <>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={getFilterName}
      ></input>
    </>
  );
}
export default Filter;
