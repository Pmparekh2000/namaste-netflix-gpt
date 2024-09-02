import MovieCard from "./MovieCard";

const MovieList = ({ title, moviesData }) => {
  console.log("Movie List props are", title, moviesData);

  return (
    <div className="px-6 ">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {moviesData?.map((movieData) => {
            return <MovieCard key={movieData.id} url={movieData.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
