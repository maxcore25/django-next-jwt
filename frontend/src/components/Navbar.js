import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/auth';

const Navbar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const logoutHandler = () => {
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      dispatch(logout());
    }
  };

  const authLinks = (
    <>
      <Link href='/dashboard'>
        <a>Dashboard</a>
      </Link>
      <Link href='/'>
        <a onClick={logoutHandler}>Logout</a>
      </Link>
    </>
  );

  const guestLinks = (
    <>
      <Link href='/register'>
        <a>Register</a>
      </Link>
      <Link href='/login'>
        <a>Login</a>
      </Link>
    </>
  );

  return (
    <nav className='nav'>
      <Link href='/'>
        <a>Home</a>
      </Link>

      {isAuthenticated ? authLinks : guestLinks}
    </nav>
  );
};

export default Navbar;
