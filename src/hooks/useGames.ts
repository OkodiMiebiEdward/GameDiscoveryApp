// import { useState, useEffect } from "react";
// import apiClient from "../services/api-client";
// import { CanceledError } from "axios";

import { IGameQuery } from "../App";
import useData from "./useData";
import { IGenre } from "./useGenres";

export interface IPlatform {
  id: number;
  name: string;
  slug: string;
}

export interface IGame {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: IPlatform }[];
  metacritic: number;
}

// interface IFetchGamesResponse {
//   count: number;
//   results: IGame[];
// }

// //created custom hook.
// const games = () => {
//   const [games, setGames] = useState<IGame[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     const controller = new AbortController();

//     apiClient
//       .get<IFetchGamesResponse>("/games", { signal: controller.signal })
//       .then((res) => {
//         setGames(res.data.results);
//         setLoading(false);
//       })
//       .catch((error) => {
//         if (error instanceof CanceledError) return;
//         setError(error.message);
//         setLoading(false);
//       });

//     return () => controller.abort();
//   }, []);

//   return { games, error, isLoading };
// };

// export default games;

const useGames = (
  // selectedGenre: IGenre | null,
  // selectedPlatform: IPlatform | null
  gameQuery: IGameQuery
) =>
  useData<IGame>(
    "/games",
    {
      params: {
        genres: gameQuery.genre,
        platforms:
          gameQuery.platform /*genres: selectedGenre?.id, platforms: selectedPlatform?.id */,
      },
    },
    [gameQuery /*selectedGenre?.id, selectedPlatform?.id*/]
  );
export default useGames;
