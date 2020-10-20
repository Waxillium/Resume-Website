import Head from 'next/head'
import Layout from '../components/Header.js';
export default function Home(){
	return(
	    <html>
	    	<Layout>
	    	</Layout>
			<Head>
			<title>Homepage</title>
			<h1>Hello</h1>
			</Head>
			
			<style jsx>{`

			`}</style>
	    </html>
	)
}