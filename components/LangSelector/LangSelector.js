import { LangContext } from '../../translation/LangContext';
import { langOptions } from '../../translation/languages';
import styles from './LangSelector.module.scss';
import { useContext } from 'react';

export default function LangSelector() {
  const { lang, langChange } = useContext(LangContext);

  const updateLang = (event) => langChange(event.target.value);

  return (
    <select className={styles.select} onChange={updateLang} value={lang}>
      {Object.entries(langOptions).map(([id, name]) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  );
}
