import { useState, useEffect } from "react";

const useURLQuery = (name, defaultValue = "") => {
  const [query, setQuery] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get(name) || defaultValue;
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (query) {
      params.set(name, query);
    } else {
      params.delete(name);
    }
    window.history.replaceState({}, "", `?${params.toString()}`);
  }, [name, query]);

  return { query, setQuery };
};

export default useURLQuery;
