import cookie from 'cookie';
import { API_URL } from '../../../config/index';

export default nice = async (req, res) => {
  if (req.method === 'GET') {
    const cookies = cookie.parse(req.headers.cookie);
    return res.status(200).json({ success: 'Success' });
  } else {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
};
