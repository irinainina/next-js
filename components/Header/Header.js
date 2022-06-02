import LangContext from '../../translation/LangContext';
import LangSwitch from '../LangSwitch/LangSwitch';
import styles from './Header.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';

const Header = () => {
  const value = useContext(LangContext);
  const { game, gallery, results } = value.state.languages;

  const { asPath } = useRouter();

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link href={'/'}>
            <a className={styles.logo}></a>
          </Link>
          <div className={styles.pagesLink}>
            <Link href={'/cards/1'}>
              <a
                className={
                  asPath.includes('cards') ? styles.linkActive : styles.link
                }
              >
                {game}
              </a>
            </Link>
            <Link href={'/gallery'}>
              <a
                className={
                  asPath === '/gallery' ? styles.linkActive : styles.link
                }
              >
                {gallery}
              </a>
            </Link>
            <Link href={'/scoreboard'}>
              <a
                className={
                  asPath === '/scoreboard' ? styles.linkActive : styles.link
                }
              >
                {results}
              </a>
            </Link>
            <div className={styles.langSwitchContainer}>
              <LangSwitch />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
