import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { client } from '../services/apollo'
import '../styles/style.scss'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<meta content="width=device-width, initial-scale=1" name="viewport" />
			</Head>

			<ThemeProvider storageKey={`@tGql:theme`}>
				<ApolloProvider client={client}>
					<Component {...pageProps} />
				</ApolloProvider>
			</ThemeProvider>
		</>
	)
}

export default MyApp
