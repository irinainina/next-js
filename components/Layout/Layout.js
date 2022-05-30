import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './Layout.module.css';

const Layout = ({ children }) => (
  <div className={styles.container}>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
