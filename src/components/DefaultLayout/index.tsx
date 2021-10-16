import { ReactNode } from 'react';
import Header from '../Header';
import './styles.scss';

function DefaultLayout({ children }: { children: ReactNode}) {
  return (
    <>
      <Header />
      <main className="container">
        {children}
      </main>
    </>
  );
}

export default DefaultLayout;
