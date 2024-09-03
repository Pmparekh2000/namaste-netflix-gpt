import { useDispatch, useSelector } from "react-redux";
import language from "../utils/languageConstants";
import openai from "../utils/openai";
import { useRef } from "react";
import { API_OPTIONS, MOVIES_API } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const preferredLanguage = useSelector(
    (store) => store.app?.preferredLanguage
  );

  const searchMovieInTMDB = async (movie) => {
    const data = await fetch(
      MOVIES_API + `/${movie}` + "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log("Searched movie data as", json.results[0]);
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const searchTextInput = searchText.current.value;
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query " +
      searchTextInput +
      ". Only give me names of 5 movies, comma seperated like the example result given ahead" +
      ". Example Result: Gadar2, Sholay, Don2, Krish2, Koi mil gaya ";
    // Make an API call to Open AI GPT API and get back the movie results.
    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });
    // console.log("Obtained gpt results as", gptResults.choices);
    const recommendedMovies = [
      "Andaz Apna Apna",
      "Hera Pheri",
      "Chupke Chupke",
      "Krish",
      "Padosan",
    ];
    const promiseArray = recommendedMovies.map((recommendedMovie) =>
      searchMovieInTMDB(recommendedMovie)
    );
    const movieData = await Promise.all(promiseArray);
    dispatch(
      addGptMovieResult({
        recommendedMovies: recommendedMovies,
        movieData: movieData,
      })
    );
    console.log("Movie data is", movieData);
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/2 bg-black grid grid-cols-12 rounded-lg"
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={language[preferredLanguage].gptSearchPlaceholder}
        />
        <button
          onClick={handleGptSearchClick}
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
        >
          {language[preferredLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
