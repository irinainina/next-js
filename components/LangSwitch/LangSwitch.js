import { useContext } from "react";
import LangContext from "../../translation/LangContext";
import styles from './LangSwitch.module.scss'

const LangSwitch = () => {
  const value = useContext(LangContext);
  let { lang } = value.state;
  let { navbarAboutLink, navbarContactLink } = value.state.languages;

  const updateLanguage = (event) => value.setLang(event.target.value);

  return (
    <select
      className={styles.select}
      onChange={updateLanguage}
      value={lang}
    >
      <option value="en">en</option>
      <option value="ru">ru</option>
      <option value="ua">ua</option>
    </select>
  );
}

export default LangSwitch;
