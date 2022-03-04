import Image from 'next/image';
import Layout from '../hocs/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Welcome to the Home page!</h1>
      </div>
    </Layout>
  );
}
