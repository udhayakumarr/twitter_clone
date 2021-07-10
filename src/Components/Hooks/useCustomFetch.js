import { useEffect, useMemo, useState } from "react";

function useCustomFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const baseUrl = useMemo(() => {
    return `http://localhost:8000/${url}`

  }, [url])

  useEffect(() => {
    function fetchData() {
      fetch(baseUrl)
        .then(async (response) => {
          const responseData = await response.json();
          console.log(responseData)
          setLoading(false)
          setData(responseData);
        })
        .catch((error) => {
          console.log(error)
          setLoading(false)
          setError(error);
        });
    }


    loading && fetchData();
  }, [baseUrl, loading]);

  function refetch() {
    setLoading(true)
  }

  return {data, error, loading, refetch};
}

export default useCustomFetch;
