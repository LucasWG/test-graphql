import { gql, useQuery } from '@apollo/client'
import { NextPage } from 'next'
import Head from 'next/head'
import NewUserForm from '../components/NewUserForm'

type User = {
	id: string
	name: string
}

export const GET_USERS = gql`
	query {
		users {
			id
			name
		}
	}
`

const Index: NextPage = () => {
	const { data, loading } = useQuery<{ users: User[] }>(GET_USERS)

	return (
		<>
			<Head>
				<title>Test GraphQL</title>
			</Head>

			<main style={{ margin: '0 2rem' }}>
				<h1>Test GraphQL</h1>

				{loading ? (
					<h2>Loading...</h2>
				) : (
					<ul style={{ margin: '30px 0' }}>
						{data?.users.map((user: User) => (
							<li key={user.id}>{user.name}</li>
						))}
					</ul>
				)}

				<NewUserForm />
			</main>
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

export default Index
