import jwt from 'jsonwebtoken';
import { AddUser } from '../interfaces/userInterface';

const jwtService = {
  createToken: (item: AddUser) => {
    const { username, classe, level } = item;
    const token = jwt.sign({ username, classe, level }, 'segredo');
    return token;
  },
};

export default jwtService;