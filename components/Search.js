import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import styles from "../styles/components/Search.module.css";
const Search = () => {
  const [searchData, setSearchData] = useState("");
  console.log(searchData);
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        name={searchData}
        onChange={(e) => setSearchData(e.target.value)}
        id=""
        placeholder="Search...."
        className={styles.searchInput}
      />
      <AiOutlineSearch />
    </div>
  );
};
export default Search;
