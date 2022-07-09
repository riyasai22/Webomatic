import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import data from "../../data/publisherList.json";
import { Link } from "react-router-dom";
const Search = () => {
  const [search, setSearch] = useState("");
  const [foundSearch, setFoundSearch] = useState([]);
  const [show, setShow] = useState(false);

  const filterByName = (e) => {
    const keyword = e.target.value;
    if (keyword !== "") {
      const results = data.publisherList.filter((item) => {
        return item.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundSearch(results);
      setShow(true);
    } else {
      setFoundSearch();
      setShow(false);
    }
    setSearch(keyword);
  };
  const removeSearch = () => {
    setSearch("");
    setShow(false);
  };
  return (
    <div className="search">
      <div className="search-bar">
        <FiSearch />
        <input
          type="text"
          value={search}
          placeholder="Search..."
          onChange={filterByName}
        />
      </div>
      <div
        className={
          show === true ? "search-results-box open" : "search-results-box"
        }
      >
        {foundSearch &&
          foundSearch.length > 0 &&
          foundSearch.map((search) => (
            <Link
              onClick={removeSearch}
              to={search.path}
              key={search.id}
              className="search-item"
            >
              <span className="search-img">
                <img src={search.img} alt="" />
              </span>
              <span className="search-title">{search.name}</span>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Search;
