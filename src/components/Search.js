
import { useState } from 'react';

function Search({ filterUserHandler }) {
  const [string, setString] = useState("");

  const handleSearch = (event) => {
    setString(event.target.value);
    filterUserHandler(event.target.value);
  };

  return (
    <div className="search-bar">
      <>
        <h2>Search</h2>

        <label></label>
        <input
          value={string}
          type="text"
          onChange={handleSearch}
          placeholder="Search for users"
        />
      </>
    </div>
  );
}

export default Search;