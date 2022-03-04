import Head from 'next/head';
import Navbar from '../components/Navbar';

const Layout = ({ title, content, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={content} />
      </Head>
      <Navbar />
      <main className='container'>{children}</main>
    </>
  );
};

Layout.defaultProps = {
  title: 'httpOnly Auth',
  content: 'Nice description',
};

export default Layout;
