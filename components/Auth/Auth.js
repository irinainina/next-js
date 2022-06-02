import LangContext from '../../translation/LangContext';
import LangSwitch from '../LangSwitch/LangSwitch';
import styles from './Auth.module.scss';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useContext } from 'react';

const Auth = () => {
  const value = useContext(LangContext);
  const { signIn, signOut, signedAs, notSigned } = value.state.languages;

  const { data: session, status } = useSession();
  const loading = status === 'loading';

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.signedInStatus}>
          <p
            className={`${
              !session && loading ? styles.loading : styles.loaded
            }`}
          >
            {!session && (
              <>
                <span className={styles.notSignedInText}>
                  <small>{notSigned}</small>
                </span>
                <a
                  href={`/api/auth/signin`}
                  className={styles.buttonPrimary}
                  onClick={(e) => {
                    e.preventDefault();
                    signIn();
                  }}
                >
                  {signIn}
                </a>
              </>
            )}
            {session?.user && (
              <>
                {session.user.image && (
                  <span
                    style={{ backgroundImage: `url('${session.user.image}')` }}
                    className={styles.avatar}
                  />
                )}
                <span className={styles.signedInText}>
                  <small>{signedAs}</small>
                  <br />
                  {session.user.email ?? session.user.name}
                </span>
                <a
                  href={`/api/auth/signout`}
                  className={styles.button}
                  onClick={(e) => {
                    e.preventDefault();
                    signOut();
                  }}
                >
                  {signOut}
                </a>
              </>
            )}
          </p>
        </div>
        <div className={styles.langSwitchContainer}>
          <LangSwitch />
        </div>
      </div>
    </div>
  );
};

export default Auth;
