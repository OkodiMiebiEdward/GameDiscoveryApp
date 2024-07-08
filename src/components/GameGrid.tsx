import React, { useEffect, useState } from "react";
import apiClient from "./services/api-client";
import { Text } from "@chakra-ui/react";

const GameGrid = () => {
  const [games, setGames] = useState<IGame[]>([]);
  const [error, setError] = useState("");

  interface IGame {
    id: number;
    name: string;
  }

  interface IFetchGamesResponse {
    count: number;
    results: IGame[];
  }

  useEffect(() => {
    apiClient
      .get<IFetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((error) => setError(error.message));
  });

  return (
    <>
      {error && <Text textColor="red">{error}</Text>}
      <ul>
        {games.map((game) => (
          <li>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
