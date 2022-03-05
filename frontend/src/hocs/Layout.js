import Head from 'next/head';
import Navbar from '../components/Navbar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { request_refresh } from '../actions/auth';

const Layout = ({ title, content, children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      dispatch(request_refresh());
    }
  }, [dispatch]);

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
