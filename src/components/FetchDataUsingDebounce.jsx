import React, { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

const FetchDataUsingDebounce = () => {
  const [searchData, setSearchData] = useState("");
  const debouncedSearchData = useDebounce(searchData, 1000);

  useEffect(() => {
    if(debouncedSearchData) {
      console.log("Hit api");
    }
  }, [debouncedSearchData]);

  const handleSearch = (e) => {
    setSearchData(e.target.value);
  };

  return (
    <input
      type="text"
      value={searchData}
      onChange={(e) => handleSearch(e)}
      placeholder="Search..."
      style={{ margin: "20px" }}
    />
  );
};

export default FetchDataUsingDebounce;
