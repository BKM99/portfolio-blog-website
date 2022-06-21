import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
	return (
		<div className='bg-white'>
			<Head>
				<title>Brandon Morimoto | Full Stack Software Engineer </title>
				<meta
					name='Personal portfolio and blog'
					content='Personal portfolio and blog'
				/>
			</Head>
			<Navbar />
			<Component {...pageProps} />
		</div>
	)
}

export default MyApp
