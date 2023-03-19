import { useContext, useEffect, useMemo } from "react";
import { UserContext } from "../App";
import { useParams, useSearchParams } from "react-router-dom";

const useLang = () => {
  const { lang, setLang } = useContext(UserContext);

  const [searchParams, setSearchParams] = useSearchParams();

  const currentLang = useMemo(() => searchParams.get("lang"), [searchParams]);

  useEffect(() => {
    if (currentLang) {
      setLang(currentLang);
    }
  }, [currentLang, setLang]);

  return {
    lang,
  };
};

export default useLang;
