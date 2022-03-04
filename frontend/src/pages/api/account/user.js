import cookie from 'cookie';
import { API_URL } from '../../../config/index';

const user = async (req, res) => {
  if (req.method === 'GET') {
    console.log(cookie.parse(''));
    const cookies = cookie.parse(req.headers.cookie ?? '');
    const access = cookies.access ?? false;

    return res.status(200).json({ success: 'Success' });
  } else {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
};

export default user;
