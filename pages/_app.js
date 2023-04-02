import '@/styles/globals.css'
import Sidebar from '../components/admin/sidebar'

export default function App({ Component, pageProps }) {
  return (
  
  <Sidebar>
    <Component {...pageProps} />
  </Sidebar>
  )
}
