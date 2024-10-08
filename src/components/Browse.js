import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useMovies from "../hooks/useMovies";
import {
  NOW_PLAYING_MOVIES,
  POPULAR_MOVIES,
  TOP_RATED_MOVIES,
  UPCOMING_MOVIES,
} from "../utils/constants";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../utils/movieSlice";
import GPTSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGpt = useSelector((store) => store.gpt.showGptSearch);
  useMovies(NOW_PLAYING_MOVIES, addNowPlayingMovies);
  useMovies(POPULAR_MOVIES, addPopularMovies);
  useMovies(TOP_RATED_MOVIES, addTopRatedMovies);
  useMovies(UPCOMING_MOVIES, addUpcomingMovies);
  return (
    <div>
      <Header />
      {showGpt ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
