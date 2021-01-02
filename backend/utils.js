import jwt from 'jsonwebtoken';
import config from './config';

export const generateToken = (user) => {
  // jwt = json web token
  return jwt.sign({
    // eslint-disable-next-line no-underscore-dangle
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin
  },
  config.JWT_SECRET
  );
};

export const isAuth = (req, res, next) => {
  const bearerToken = req.headers.authorization;

  if(!bearerToken) {
    res.status(401).send({
      message: 'Token is not supplied.'
    });
  } else {
    const token = bearerToken.slice(7, bearerToken.length);
    jwt.verify(token, config.JWT_SECRET, (err, data) => {
      if(err) {
        res.status(401).send({nessage: 'Invalid token.'});
      } else {
        req.user = data;
        next();
      }
    });
  }
};