import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  const popularMoviesData = useSelector((store) => store.movies?.popularMovies);
  const topRatedMoviesData = useSelector(
    (store) => store.movies?.topRatedMovies
  );
  const upcomingMoviesData = useSelector(
    (store) => store.movies?.upcomingMovies
  );

  return (
    <div className=" bg-black">
      <div className="mt-0 md:-mt-52 pl-12 relative z-20">
        {nowPlayingMovies ? (
          <MovieList title={"Now Playing"} moviesData={nowPlayingMovies} />
        ) : (
          <div></div>
        )}
        {popularMoviesData ? (
          <MovieList title={"Popular"} moviesData={popularMoviesData} />
        ) : (
          <div></div>
        )}
        <MovieList title={"Top Rated"} moviesData={topRatedMoviesData} />
        <MovieList title={"Upcoming"} moviesData={upcomingMoviesData} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
