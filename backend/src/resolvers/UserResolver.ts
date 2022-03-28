import { Length } from 'class-validator'
import { Arg, Ctx, Field, InputType, Mutation, Query, Resolver } from 'type-graphql'
import { User } from '../models/User'
import { Context } from '../services/prisma'

// query: buscar dados
// mutation: criar, alterar ou deletar

@InputType()
class CreateUserInput {
	@Field()
	@Length(4, 10)
	name: string
}

@Resolver(User)
export class UserResolver {
	@Query(() => [User])
	async users(@Ctx() ctx: Context) {
		return ctx.prisma.user.findMany()
	}

	@Mutation(() => User)
	async createUser(@Arg('data') { name }: CreateUserInput, @Ctx() ctx: Context) {
		return ctx.prisma.user.create({ data: { name: name } })
	}
}
