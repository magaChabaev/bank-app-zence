import axios from 'axios';
import { setTokenToLocaleStorage } from 'utils/api.utils';

type loginResponse = {
  data: {
    Token: string;
  };
};

export const AuthService = {
  async login() {
    const response = await axios.post<loginResponse>(
      'http://restapi.adequateshop.com/api/authaccount/login',
      { email: 'Developerw1225@gmail.com', password: 123456 }
    );
    setTokenToLocaleStorage(response.data.data.Token);
  },
};
