import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ url }) => {
  return (
    <div className="w-48 h-48 pr-4">
      <img alt="movie card" src={IMG_CDN + "/" + url} />
    </div>
  );
};

export default MovieCard;
