import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

export default class MyDocument extends Document {
	render(): JSX.Element {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />

					<meta content="IE=edge" httpEquiv="X-UA-Compatible" />
					<meta name="robots" content="follow, index" />

					{/* FONT HERE */}

					<link rel="icon" href="/favicon.ico" />
					{/* <link rel="shortcut icon" href="/2769608.png" type="image/png" /> */}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
