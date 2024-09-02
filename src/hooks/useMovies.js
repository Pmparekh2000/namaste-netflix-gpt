import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useMovies = (movieApi, reduxAction) => {
  // Fetch data from TMDB API and update store
  const dispatch = useDispatch();
  const getMovies = async () => {
    const data = await fetch(movieApi, API_OPTIONS);
    const json = await data.json();
    dispatch(reduxAction(json.results));
  };
  useEffect(() => {
    getMovies();
  }, []);
};

export default useMovies;
