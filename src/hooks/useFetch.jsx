import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetechData = async () => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("No Data");
      }

      try {
        const apiData = await response.json();
        setData([...apiData]);
      } catch (error) {
        setError("Error Occurred");
      } finally {
        setLoading(false);
      }
    };
    setLoading(true);
    fetechData();
  }, []);

  return { data, error, loading };
};

export default useFetch;
