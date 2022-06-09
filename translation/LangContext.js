import { langOptions, dictionaryList } from './languages';
import { useState, createContext, useContext, useEffect } from 'react';

export const LangContext = createContext({
  lang: 'en',
  dictionary: dictionaryList.en,
});

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en');
  useEffect(() => {
    setLang(window.localStorage.getItem('rcml-lang') || 'en');
  }, []);

  const provider = {
    lang,
    dictionary: dictionaryList[lang],
    langChange: (selected) => {
      const newLang = langOptions[selected] ? selected : 'en';
      setLang(newLang);
      window.localStorage.setItem('rcml-lang', newLang);
    },
  };

  return (
    <LangContext.Provider value={provider}>{children}</LangContext.Provider>
  );
}
