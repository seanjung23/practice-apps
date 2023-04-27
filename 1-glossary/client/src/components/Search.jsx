import React, { useState } from 'react';

const Search = ({ searchWord }) => {
  const [ query, setQuery ] = useState('');

  const querysetter = (e) => {
    setQuery(e.target.value);
  }

  return (
    <div>
      <label>
        <input type='text' placeholder='search words here!' onChange={ querysetter }/>
        <button type='submit' onClick={ () => searchWord(query) }>Search Glossary</button>
      </label>
    </div>
  );
};

export default Search;