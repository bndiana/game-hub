// import { useEffect, useState } from "react";
// import apiClient from "../services/api/client";
// import { CanceledError } from "axios";
import { GameQuery } from "../App";
import useData from "./useData";

export interface Platform {
  id: number;
  name: String;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

// interface FetchGamesResponse {
//   count: number;
//   results: Game[];
// }

// const useGames = () => {
//   const [games, setGames] = useState<Game[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();

//     setIsLoading(true);
//     apiClient
//       .get<FetchGamesResponse>("/games", {
//         signal: controller.signal,
//       })
//       .then((res) => {
//         setGames(res.data.results), setIsLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message);
//         setIsLoading(false);
//       });

//     return () => controller.abort();
//   }, []);

//   return { games, error, isLoading };
// };

const useGames = (
  // selectedGenre: Genre | null,
  // selectedPlatform: Platform | null,
  gameQuery: GameQuery
) =>
  useData<Game>(
    "/games",
    {
      params: {
        // genres: selectedGenre?.id,
        // platforms: selectedPlatform?.id,
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [
      // selectedGenre?.id, selectedPlatform?.id
      gameQuery,
    ]
  );

export default useGames;
