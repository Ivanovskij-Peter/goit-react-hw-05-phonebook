import React from 'react';

function Filter({ filter, getFilterName }) {
  return (
    <>
      <input
        style={{
          display: 'block',
          marginTop: '5px',
          marginBottom: '10px',
          width: '100%',
        }}
        type="text"
        name="filter"
        value={filter}
        onChange={getFilterName}
      ></input>
    </>
  );
}
export default Filter;
