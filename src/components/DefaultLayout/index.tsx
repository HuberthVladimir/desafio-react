import { ReactNode } from 'react';
import Header from '../Header';
import './styles.scss';

function DefaultLayout({ children }: { children: ReactNode}) {
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
