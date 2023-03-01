import { UserInput, useUpdateUsuarioMutation } from '@generated/graphql'

export const useUsuarioService = () => {
  const [updateUsuarioMutation] = useUpdateUsuarioMutation()

  return {
    updateUsuario: async (input: UserInput) => {
      try {
        const res = await updateUsuarioMutation({ variables: { input } })

        return { res: true, response: !!res.data?.UpdateUsuario }
      } catch (error: any) {
        return { res: false, response: error.graphQLErrors[0].debugMessage }
      }
    }
  }
}
