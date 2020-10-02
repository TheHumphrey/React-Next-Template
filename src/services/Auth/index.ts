import { Response } from '@app/interfaces/AuthResponse';
import api from '@app/services/Api';

export function signIn(): Promise<Response> {
  //Request de login ao server
  api.post('/login', { username: 'username', password: 'password' }).then((res) => {
    console.log(res.headers);
  });

  return new Promise((resolve) => {
    resolve({
      token: 'fdioafjaijfdasifda',
      user: {
        id: 1,
        name: 'username',
        email: 'useremail',
      },
    });
  });
}

export function signInWithToken(token: string) {
  //request de login ao server com o token
  api.post('/loginToken', token).then((res) => {
    console.log(res.status);
  });

  return {
    success: true,
    token: token,
  };
}
