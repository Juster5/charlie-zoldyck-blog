// import type { NextPage } from 'next';
import Header from 'components/Header';
import Footer from 'components/Footer';

type LayoutProps = {
  children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;