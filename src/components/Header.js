import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SPACE, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toogleGptSearchView } from "../utils/gptSlice";
import { updatePreferredLanguage } from "../utils/appSlice";
import language from "../utils/languageConstants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const preferredLanguage = useSelector(
    (store) => store.app?.preferredLanguage
  );
  const showGpt = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toogleGptSearchView());
  };

  const handleSignOutUser = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="flex justify-between absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-48" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2">
          {showGpt && (
            <select
              onChange={(event) => {
                dispatch(updatePreferredLanguage(event.target.value));
              }}
              className="p-2 m-2 bg-gray-900 text-white"
            >
              {SUPPORTED_LANGUAGES.map((language) => {
                return (
                  <option key={language.identifier} value={language.identifier}>
                    {language.name}
                  </option>
                );
              })}
            </select>
          )}
          <p className="mx-5 my-3 font-bold text-white">
            {language[preferredLanguage].welcome}
            {SPACE}
            {user.displayName}
          </p>
          <button
            className="py-2 px-4 m-2 bg-purple-800 text-white rounded-lg mx-4 my-2"
            onClick={handleGptSearchClick}
          >
            {showGpt
              ? language[preferredLanguage].homePage
              : language[preferredLanguage].gptSearch}
          </button>
          <img className="w-12 h-12 mx-5" alt="usericon" src={user.photoURL} />
          <button className="font-bold text-white" onClick={handleSignOutUser}>
            {language[preferredLanguage].signOut}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
