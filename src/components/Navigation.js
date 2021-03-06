import React from 'react';
import '../index.css';

function SearchForm(props) {
  return (
    <form id="searchBar">
      <div className="input-group" style={{ display: 'flex', marginLeft: '2rem', marginTop: '5px' }}>
        <label htmlFor="search"></label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Enter Search Here"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-danger ml-1">
          Search
        </button>
        <button onClick={props.refreshPage} className="btn btn-primary ml-1 mr-1">
          Reset
        </button>
        {/* <br /> */}
      </div>
    </form>
  );
}

export default SearchForm;