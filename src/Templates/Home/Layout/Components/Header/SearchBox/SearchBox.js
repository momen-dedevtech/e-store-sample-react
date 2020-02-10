import React from 'react';

function SearchBox(props) {
  return (
    <div>
      <div className="input-group">
        <input onChange={props.searchString} required type="text" className="form-control" placeholder="Products"/>
      </div>
    </div>
  );
}

export default SearchBox;
