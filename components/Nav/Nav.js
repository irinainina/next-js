import levels from '../../constants/levels';
import styles from './Nav.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

const navigation = [
  { id: 1, title: levels.introduction, path: '/cards/1' },
  { id: 2, title: levels.sparrows, path: '/cards/2' },
  { id: 3, title: levels.forestbirds, path: '/cards/3' },
  { id: 4, title: levels.songbirds, path: '/cards/4' },
  { id: 5, title: levels.predatorbirds, path: '/cards/5' },
  { id: 6, title: levels.seabirds, path: '/cards/6' },
];

const Nav = ({ score, questionId }) => {
  const { asPath } = useRouter();
  const links = navigation.map(({ id, title, path }) => {
    return (
      <li className={styles.pageItem} key={id}>
        <Link href={path}>
          <a
            className={
              asPath === path ? styles.pageLinkActive : styles.pageLink
            }
          >
            {title}
          </a>
        </Link>
      </li>
    );
  });

  return <ul className={styles.pagination}>{links}</ul>;
};

export default Nav;
