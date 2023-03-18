import { useContext, useEffect } from "react";
import { UserContext } from "../App";

const useLang = (languageID) => {
  const { lang, setLang } = useContext(UserContext);

  useEffect(() => {
    if (languageID === null) {
      setLang("id");
    } else {
      setLang(languageID);
    }
  }, [languageID, setLang]);

  return {
    lang,
  };
};

export default useLang;
