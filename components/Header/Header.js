import styles from './Header.module.scss';
import Link from 'next/link';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link href={'/'}>
            <a className={styles.logo}></a>
          </Link>
          <div className={styles.pagesLink}>
            <Link href={'/cards/1'}>
              <a className={styles.link}>Игра</a>
            </Link>
            <Link href={'/gallery'}>
              <a className={styles.link}>Галерея</a>
            </Link>
            <Link href={'/scoreboard'}>
              <a className={styles.link + ' ' + styles.lastLink}>Результаты</a>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;