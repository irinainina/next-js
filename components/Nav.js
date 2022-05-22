import Link from "next/link";
import { useRouter } from "next/router";
import styles from '../styles/Nav.module.scss';

const navigation = [
  { id: 1, title: 'Разминка', path: '/cards/1' },
  { id: 2, title: 'Воробьиные', path: '/cards/2' },
  { id: 3, title: 'Лесные птицы', path: '/cards/3' },
  { id: 4, title: 'Певчие птицы', path: '/cards/4' },
  { id: 5, title: 'Хищные птицы', path: '/cards/5' },
  { id: 6, title: 'Морские птицы', path: '/cards/6' },
];

const Nav = ({ score, questionId }) => {
  const {asPath} = useRouter();
  const links = navigation.map(({ id, title, path }) => {
    return (
      <li className={styles.pageItem} key={id}>
        <Link href={path}>
          <a className={asPath === path ? styles.pageLinkActive : styles.pageLink}>
            {title}
          </a>
        </Link>
      </li>
    );
  });

  return <ul className={styles.pagination}>{links}</ul>;
};

export default Nav;