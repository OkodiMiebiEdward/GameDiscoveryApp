import React from "react";
import useGenres, { IGenre } from "../hooks/useGenres";
import useData from "../hooks/useData";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
