import Footer from './Footer/Footer';
import Header from './Header/Header';

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
