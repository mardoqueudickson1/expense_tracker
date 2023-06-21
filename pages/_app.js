import React from 'react';
import '@/styles/globals.css';
import { useRouter } from 'next/router';
import { PersistGate } from 'redux-persist/integration/react';
import LoginPage from './login';
import ChangePasswordPage from './alterar-password';
import Sidebar from '../components/sidebar';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import store, { persistor } from '../store';
import { Toaster } from 'react-hot-toast';

const noSidebarRoutes = ['/login', '/alterar-password'];

function App({ Component, pageProps, toast }) {
  const router = useRouter();
  const isAuthenticated = useSelector((state) => state.auth.isLoggedIn);
  const isRedirect = useSelector((state) => state.auth.redirect);
  console.log('AQUIIIIIIIIIIII:', isRedirect);

  const isChangePasswordPage =
    router.pathname === '/alterar-password' || router.pathname === '/login';

  // Verificar se o usuário não está logado
  if (!isAuthenticated) {
    return <LoginPage />;
  }

  // Verificar se a variável de redirecionamento está ativada
  if (isRedirect) {
    return <ChangePasswordPage />;
  }

  const showSidebar =
    !isChangePasswordPage && noSidebarRoutes.includes(router.pathname);

  return (
    <div>
      <Toaster toast={toast} />
      {!showSidebar ? (
        <Sidebar>
          <Component {...pageProps} />
        </Sidebar>
      ) : (
        <Component {...pageProps} />
      )}
    </div>
  );
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
