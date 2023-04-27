import '@/styles/globals.css';
import { useRouter } from 'next/router';
import { PersistGate } from 'redux-persist/integration/react';
import LoginPage from './login';
import Sidebar from '../components/sidebar';
import { Provider } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import store, { persistor } from '../store';


const noSidebarRoutes = ['/login'];

function App({ Component, pageProps }) {
  const router = useRouter()
  const isAuthenticated = useSelector((state) => state.auth.isLoggedIn);

  const isLoginPage = router.pathname === '/login';
  const showSidebar = isAuthenticated && !noSidebarRoutes.includes(router.pathname);

  if (isLoginPage) {
    return <LoginPage />
  } else {
    return (
      <div>
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
