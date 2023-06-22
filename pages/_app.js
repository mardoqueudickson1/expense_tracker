import React, { useState } from 'react';
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

  const [isModalOpen, setIsModalOpen] = useState(true);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const isChangePasswordPage =
    router.pathname === '/alterar-password' || router.pathname === '/login';

  // Verificar se o usuário não está logado
  if (!isAuthenticated) {
    return (
      <>
        <Toaster toast={toast} />
        <LoginPage />;
      </>
    );
  }

  // Verificar se a variável de redirecionamento está ativada
  if (isRedirect) {
    return (
      <>
        <Toaster toast={toast} />

        {isModalOpen && (
          <div
            className="relative z-10"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <svg
                          className="h-6 w-6 text-red-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                          />
                        </svg>
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <h3
                          className="text-base font-semibold leading-6 text-gray-900"
                          id="modal-title"
                        >
                          Alterar a senha
                        </h3>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Com o objetivo de garantir a segurança da sua conta,
                            é imprescindível que você realize a alteração da sua
                            senha padrão atual para uma nova, com
                            características mais robustas e exclusivas.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      onClick={closeModal}
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    >
                      Ok
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <ChangePasswordPage />
      </>
    );
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
