import Image from 'next/image';
import Layout from '../hocs/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout title='httpOnly Auth | Home' content='Nice description'>
      <div className={styles.container}>
        <h1>Home Page</h1>
        <p>Welcome to the Home page!</p>
      </div>
    </Layout>
  );
}
