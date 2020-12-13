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