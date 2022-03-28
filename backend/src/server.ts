import 'reflect-metadata'

import path from 'path'
import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'
import { UserResolver } from './resolvers/UserResolver'
import { context } from './services/prisma'

const main = async () => {
	const schema = await buildSchema({
		resolvers: [UserResolver],
		emitSchemaFile: path.resolve(__dirname, 'schema.gql')
	})

	const server = new ApolloServer({ schema, context: context })

	const { url } = await server.listen()

	console.clear()
	console.log(`[INFO] 🚀 Server is running on ${url}`)
}

main()
