import React from "react";
import useFetch from "../hooks/useFetch";

const FetchAPIData = () => {
  const {
    data: data1,
    error: error1,
    loading: loading1,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

  const {
    data: data2,
    error: error2,
    loading: loading2,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  return !loading1 || error1 || error2 || !loading2 ? (
    <div style={{ display: "flex" }}>
      <div style={{ padding: "20px", flexGrow: 1 }}>
        {data1?.map((item, idx) => (
          <p key={idx}>{item.title}</p>
        ))}
      </div>
      <div style={{ padding: "20px", flexGrow: 1 }}>
        {data2?.map((item, idx) => (
          <p key={idx}>{item.name}</p>
        ))}
      </div>
    </div>
  ) : (
    <div>No Data</div>
  );
};

export default FetchAPIData;
