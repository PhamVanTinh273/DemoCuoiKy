import React, { useState } from 'react';
import axios from 'axios';

function SearchResult() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (keyword) => {
    axios.get(`/v1/dogs/search?name=${keyword}`)
      .then((response) => {
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      {/* Render search results */}
      {searchResults.map((dog) => (
        <div key={dog.id}>{dog.name}</div>
      ))}
    </div>
  );
}

export default SearchResult;