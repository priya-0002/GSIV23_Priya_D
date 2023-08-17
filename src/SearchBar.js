import React, { useState } from 'react';
import './index.css'
function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="">
     
<nav class="navbar navbar-light bg-light justify-content-between" style={{marginBottom:'1%'}}>
  <a class="navbar-brand">GSynergy React Web Challenge</a>
  <form class="form-inline">
     <input class="form-control mr-sm-2" type="search" placeholder="Search for movies" value={query} onChange={handleChange} aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
    </div>
  );
}

export default SearchBar;
