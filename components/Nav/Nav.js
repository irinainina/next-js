import levels from '../../constants/levels';
import LangContext from '../../translation/LangContext';
import styles from './Nav.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useContext } from 'react';

const Nav = ({ score, questionId }) => {
  const value = useContext(LangContext);
  const { lang } = value.state;

  const navigation = [
    { id: 1, title: levels[lang].introduction, path: '/cards/1' },
    { id: 2, title: levels[lang].sparrows, path: '/cards/2' },
    { id: 3, title: levels[lang].forestbirds, path: '/cards/3' },
    { id: 4, title: levels[lang].songbirds, path: '/cards/4' },
    { id: 5, title: levels[lang].predatorbirds, path: '/cards/5' },
    { id: 6, title: levels[lang].seabirds, path: '/cards/6' },
  ];

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

Nav.propTypes = {
  score: PropTypes.number,
  questionId: PropTypes.number,
};

export default Nav;
