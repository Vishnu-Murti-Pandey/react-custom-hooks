import React, { useEffect, useState } from "react";
import { useThrottle } from "../hooks/useThrottle";

const FetchDataUsingThrottle = () => {
  const [searchData, setSearchData] = useState("");
  const throttleSearchData = useThrottle(searchData, 2000);

  useEffect(() => {
    if (throttleSearchData) {
      console.log("Hit api");
    }
  }, [throttleSearchData]);

  const handleChange = (e) => {
    setSearchData(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        value={searchData}
        onChange={(e) => handleChange(e)}
        placeholder="Search..."
      />
      <p>Throttled Input: {throttleSearchData}</p>
    </>
  );
};

export default FetchDataUsingThrottle;
