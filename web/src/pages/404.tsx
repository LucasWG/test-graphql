import { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/pages/404.module.scss'

const E404: NextPage = () => {
	return (
		<>
			<Head>
				<title>404 | unnamed</title>
			</Head>

			<div className={styles.container}>
				<h1>404 | Not Found</h1>
			</div>
		</>
	)
}

// export const getServerSideProps: GetServerSideProps = async context => {
// 	return {
// 		props: {}
// 		// redirect: {
// 		// 	permanent: false,
// 		// 	destination: '/redirect_to'
// 		// }
// 	}
// }

// export const getStaticPaths: GetStaticPaths = async () => {
// 	return {
// 		paths: [],
// 		fallback: true
// 	}
// }

// export const getStaticProps: GetStaticProps = async context => {
// 	return {
// 		props: {},
// 		revalidate: 60
// 	}
// }

export default E404
