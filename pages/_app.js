/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import '@/styles/globals.css';
import Sidebar from '../components/sidebar';

export default function App({ Component, pageProps }) {
  return (

    <Sidebar>
      <Component {...pageProps} />
    </Sidebar>
  );
}
