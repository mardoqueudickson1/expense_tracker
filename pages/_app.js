import '@/styles/globals.css'
import Sidebar from '../components/admin/index/sidebar'

export default function App({ Component, pageProps }) {
  return (
  
  <Sidebar>
    <Component {...pageProps} />
  </Sidebar>
  )
}
