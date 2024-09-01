import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  // console.log("From main container", nowPlayingMovies);
  if (!nowPlayingMovies) return;

  const mainMovie = nowPlayingMovies[0];
  console.log("main movie is", mainMovie);
  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movie_id={id} />
    </div>
  );
};

export default MainContainer;
