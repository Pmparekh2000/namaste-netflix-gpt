import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useMovies = (movieApi, reduxAction) => {
  // Fetch data from TMDB API and update store
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
  const getMovies = async () => {
    const data = await fetch(movieApi, API_OPTIONS);
    const json = await data.json();
    dispatch(reduxAction(json.results));
  };
  useEffect(() => {
    if (
      !(nowPlayingMovies && popularMovies && topRatedMovies && upcomingMovies)
    )
      getMovies();
  }, []);
};

export default useMovies;
