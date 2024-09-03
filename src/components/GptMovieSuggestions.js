import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieResults, movieNames } = gpt;
  if (!movieNames) return <div></div>;

  return (
    <div className="m-4 p-4 bg-black text-white bg-opacity-90">
      <div>
        {movieResults.map((movieResult, index) => (
          <MovieList
            key={movieNames[index]}
            title={movieNames[index]}
            moviesData={movieResult}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
