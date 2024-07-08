import { useState, useEffect } from "react";
import apiClient from "../components/services/api-client";
import { CanceledError } from "axios";

export interface IGame {
  id: number;
  name: string;
  background_image: string;
}

interface IFetchGamesResponse {
  count: number;
  results: IGame[];
}

//created custom hook.
const games = () => {
  const [games, setGames] = useState<IGame[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<IFetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default games;
