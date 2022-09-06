import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
    // TODO: pretty scuffed way of doing this, need to fix maybe use redux?
    // I don't really like having the dev-mode just be another page
    const router = useRouter()
    const showHeader = router.pathname === '/dev-mode' ? false : true;
    return (
        <div>
            { showHeader && <Navbar />}
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp
