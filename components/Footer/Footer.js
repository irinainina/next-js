import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
      <div className={styles.footerData}>
        <p className={styles.copyright}>©</p>
        <p className={styles.year}>2022</p>
        <a className={styles.github} href="https://github.com/irinainina">irinainina</a>        
      </div>
      <a className={styles.companyLogo} href="https://www.halo-lab.com/"></a>
      </div>
    </div>
  );
};

export default Footer;