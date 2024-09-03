import { useSelector } from "react-redux";
import language from "../utils/languageConstants";

const GptSearchBar = () => {
  const preferredLanguage = useSelector(
    (store) => store.app?.preferredLanguage
  );
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12 rounded-lg">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={language[preferredLanguage].gptSearchPlaceholder}
        />
        <button className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3">
          {language[preferredLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
