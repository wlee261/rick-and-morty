"use client";

import CharacterGrid from "@/components/CharacterGrid";
import Pagination from "@/components/Pagination";
import useFetch from "@/hooks/useFetch";

import { ApiCallReturn } from "@/types";

import { useEffect, useState } from "react";

const API_URL = "https://rickandmortyapi.com/api/character/?page=";

export default function Home() {
  const [page, setPage] = useState<number>(1);
  const { data, error, loading, refetcher } = useFetch<ApiCallReturn>(
    API_URL + page
  );

  useEffect(() => {
    refetcher();
    console.log(data);
  }, [page]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="text-2xl my-5">Rick And Morty Characters</span>
      <CharacterGrid characters={data?.results} />
      <Pagination
        currentPage={page}
        totalPages={data?.info.count}
        setCurrentPage={setPage}
      />
    </div>
  );
}
