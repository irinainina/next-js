import styles from './Header.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
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
              <a className={
                asPath.includes('cards') ? styles.linkActive : styles.link
              }>Игра</a>
            </Link>
            <Link href={'/gallery'}>
              <a className={
                asPath === '/gallery' ? styles.linkActive : styles.link
              }>Галерея</a>
            </Link> 
            <Link href={'/scoreboard'}>
              <a className={
                asPath === '/scoreboard' ? styles.lastLinkActive : styles.lastLink}>Результаты</a>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;