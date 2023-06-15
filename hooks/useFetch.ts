"use client";

import { useEffect, useState } from "react";

interface UseFetchResult<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
  refetcher: () => void;
}

const useFetch = <T>(url: string): UseFetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(() => setError(error))
      .finally(() => setLoading(false));
  }, []);

  const refetcher = () => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(() => setError(error))
      .finally(() => setLoading(false));
  };

  return { data, error, loading, refetcher };
};

export default useFetch;
