import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS, NOW_PLAYING_MOVIES } from "../utils/constants";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  // Fetch data from TMDB API and update store
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(NOW_PLAYING_MOVIES, API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
