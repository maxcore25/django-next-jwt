import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className='nav'>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/register'>
        <a>Register</a>
      </Link>
      <Link href='/login'>
        <a>Login</a>
      </Link>
    </nav>
  );
};

export default Navbar;
