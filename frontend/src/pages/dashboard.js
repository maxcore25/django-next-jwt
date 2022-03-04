import { useEffect } from 'react';
import Layout from '../hocs/Layout';

const Dashboard = () => {
  useEffect(() => {
    fetch('/api/account/user', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
  }, []);

  return (
    <Layout title='httpOnly Auth | Dashboard' content='Nice description'>
      <h1>Dashboard</h1>
    </Layout>
  );
};

export default Dashboard;
