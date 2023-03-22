import { useContext, useEffect, useMemo } from "react";
import { UserContext } from "../App";
import {
  createSearchParams,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useTranslation } from "react-i18next";

const useLang = () => {
  const { lang, setLang } = useContext(UserContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const currentLang = useMemo(
    () => searchParams.get("lang") || "id",
    [searchParams]
  );

  const handleSwitchLang = (lang) => {
    i18n.changeLanguage(lang);
    const searchQueryString = `?${createSearchParams({
      ...Object.fromEntries([...Array.from(searchParams)]),
      lang,
    })}`;

    navigate({
      search: searchQueryString,
    });
  };

  useEffect(() => {
    if (currentLang) {
      setLang(currentLang);
      i18n.changeLanguage(currentLang);
    }
  }, [currentLang, i18n, setLang]);

  return {
    lang,
    handleSwitchLang,
  };
};

export default useLang;
