import { BACKGROUND_PICTURE_URL } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover"
          src={BACKGROUND_PICTURE_URL}
          alt="logo"
        />
      </div>
      <div className="pt-[30%] md:pt-0">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GPTSearch;
