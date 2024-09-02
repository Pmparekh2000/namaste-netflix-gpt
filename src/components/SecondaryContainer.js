import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const moviesData = useSelector((store) => store.movies?.nowPlayingMovies);
  return (
    moviesData && (
      <div className=" bg-black">
        <div className="-mt-52 pl-12 relative z-20">
          <MovieList title={"Now Playing"} moviesData={moviesData} />
          <MovieList title={"Trending"} moviesData={moviesData} />
          <MovieList title={"Popular"} moviesData={moviesData} />
          <MovieList title={"Upcoming"} moviesData={moviesData} />
          <MovieList title={"Horror"} moviesData={moviesData} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
