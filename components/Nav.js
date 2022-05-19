import Link from 'next/link';
import styles from './../styles/Nav.module.scss';

const navigation = [
  { id: 1, title: 'Разминка', path: '/cards/card' },
  { id: 2, title: 'Воробьиные', path: '/cards/card' },
  { id: 3, title: 'Лесные птицы', path: '/cards/card' },
  { id: 4, title: 'Певчие птицы', path: '/cards/card' },
  { id: 5, title: 'Хищные птицы', path: '/cards/card' },
  { id: 6, title: 'Морские птицы', path: '/cards/card' },
];

const Nav = ({ score = 25 }) => {
  const links = navigation.map(({ id, title, path }) => {
    return (
      <li className={styles.pageItem} key={id}>
        <Link href={path}>
          <a className={id === 1 ? styles.pageLinkActive : styles.pageLink}>
            {title}
          </a>
        </Link>
      </li>
    );
  });

  return <ul className={styles.pagination}>{links}</ul>;
};

export default Nav;
