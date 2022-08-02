import jwt from 'jsonwebtoken';

const jwtService = {
  createToken: (username: string, classe: string, level: number, password: string) => {
    const token = jwt.sign({ username, classe, level, password }, 'segredo');
    return token;
  },
};

export default jwtService;