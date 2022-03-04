import cookie from 'cookie';
import { API_URL } from '../../../config/index';

export default nice = async (req, res) => {
  if (req === 'POST') {
    const { username, password } = req.body;

    const body = JSON.stringify({
      username,
      password,
    });
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
};
