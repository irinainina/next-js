import styles from './Auth.module.scss';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const Auth = () => {
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.signedInStatus}>
          <p className={`${!session && loading ? styles.loading : styles.loaded}`}>
            {!session && (
              <>
                <span className={styles.notSignedInText}>
                <small>You are not signed in</small>
                </span>
                <a
                  href={`/api/auth/signin`}
                  className={styles.buttonPrimary}
                  onClick={(e) => {
                    e.preventDefault();
                    signIn();
                  }}
                >
                  Sign in
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
                  <small>Signed in as</small>
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
                  Sign out
                </a>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
