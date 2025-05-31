const jwt = require('jsonwebtoken');
const JWT_SECRET = 'your_jwt_secret_key'; // use env in production

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Bearer token
  if (!token) return res.status(401).json({ msg: 'No token. Auth denied.' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded.userId;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Invalid token' });
  }
};

module.exports = authMiddleware;
