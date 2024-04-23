import { API_KEY, TMDB_API_URL } from "../config/constants/index.js";

export const getUpcomingMovies = async (page = 1) => {
  const res = await fetch(
    `${TMDB_API_URL}/movie/upcoming?language=ko-KR&page=${page}&api_key=${API_KEY}`
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return res.results;
};
