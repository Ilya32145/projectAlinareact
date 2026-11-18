import { useState } from 'react';
import AppRoutes from './AppRoutes';
import { Header } from '../components/Header';
import { SignUpMenu, type User } from '../components/SignUpMenu';

const localUser = {
  username: 'Alina',
  password: '123',
};

function App() {
  const [user, setUser] = useState<User | null>(JSON.parse(localStorage.getItem('user') || 'null'));

  const onLogin = (userOfSignUpMenu: User, remember: boolean) => {
    setUser(userOfSignUpMenu);
    if (remember) localStorage.setItem('user', JSON.stringify(userOfSignUpMenu));
  };

  const isValid: boolean =
    user?.username === localUser.username && user?.password === localUser.password;

  if (isValid) {
    return (
      <>
        <Header user={user} setUser={setUser} />
        <main>
          <AppRoutes />
        </main>
      </>
    );
  }

  return (
    <>
      {user && (
        <>
          <h1>Вы ввели неправильные данные</h1>
          {localStorage.removeItem('user')}
        </>
      )}
      <SignUpMenu onLogin={onLogin} />
    </>
  );
}

export default App;
