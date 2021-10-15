import Header from '../Header';
import './styles.scss';

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <div className="container">
        {children}
      </div>
    </>
  );
}

export default DefaultLayout;
