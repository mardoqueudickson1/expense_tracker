import React from 'react';
import '@/styles/globals.css';
import bcrypt from 'bcryptjs';
import { useRouter } from 'next/router';
import { PersistGate } from 'redux-persist/integration/react';
import LoginPage from './login';
import ChangePasswardPage from './alterar-password';
import Sidebar from '../components/sidebar';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import store, { persistor } from '../store';
import { Toaster } from 'react-hot-toast';

const noSidebarRoutes = ['/login', '/alterar-password'];

function App({ Component, pageProps, toast }) {
  const router = useRouter();
  const isAuthenticated = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);

  const default_password = '12345';
  const isMatch = bcrypt.compareSync(default_password, user.password_hash);

  const isLoginPage = router.pathname === '/login';
  // const isChangePasswardPage = router.pathname === '/alterar-password';

  const showSidebar =
    isAuthenticated && !noSidebarRoutes.includes(router.pathname);

  if (isLoginPage) {
    return <LoginPage />;
  } else if (isMatch) {
    return <ChangePasswardPage />;
  } else {
    return (
      <div>
        <Toaster toast={toast} />
        {showSidebar ? (
          <Sidebar>
            <Component {...pageProps} />
          </Sidebar>
        ) : (
          <LoginPage />
        )}
      </div>
    );
  }
}

export default function MyApp(props) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App {...props} />
      </PersistGate>
    </Provider>
  );
}
