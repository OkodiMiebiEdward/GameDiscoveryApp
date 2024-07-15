// import { useEffect, useState } from "react";
// import apiClient from "../services/api-client";
// import { CanceledError } from "axios";

import useData from "./useData";

// export interface IGenre {
//   id: number;
//   name: string;
// }

// interface IFetchGenreResponse {
//   count: number;
//   results: IGenre[];
// }

// const useGenres = () => {
//   const [genres, setGenres] = useState<IGenre[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     const controller = new AbortController();

//     apiClient
//       .get<IFetchGenreResponse>("/genres", { signal: controller.signal })
//       .then((res) => {
//         setGenres(res.data.results);
//         setLoading(false);
//       })
//       .catch((error) => {
//         if (error instanceof CanceledError) return;
//         setError(error.message);
//         setLoading(false);
//       });

//     return () => controller.abort();
//   }, []);

//   return { genres, error, isLoading };
// };

// export default useGenres;

export interface IGenre {
  id: number;
  name: string;
}

const useGenres = () => useData<IGenre>("/genres");

export default useGenres;
