import {
  UpdatePasswordInput,
  useCreateUsuarioMutation,
  useRecoverPasswordMutation,
  UserInput,
  useUpdatePasswordMutation
} from '@generated/graphql'

export const useAuth = () => {
  const [createUsuarioMutation] = useCreateUsuarioMutation()
  const [recoverPasswordMutation] = useRecoverPasswordMutation()
  const [updatePasswordMutation] = useUpdatePasswordMutation()

  return {
    createUser: async (input: UserInput) => {
      try {
        const res = await createUsuarioMutation({ variables: { input } })

        return { res: true, response: !!res.data?.CreateUsuario }
      } catch (error: any) {
        return { res: false, response: error.graphQLErrors[0].debugMessage }
      }
    },
    recoverPassword: async (email: string) => {
      try {
        const res = await recoverPasswordMutation({ variables: { email } })

        return { res: true, response: !!res.data?.RecoverPassword }
      } catch (error: any) {
        return { res: false, response: error.graphQLErrors[0].debugMessage }
      }
    },
    updatePassword: async (input: UpdatePasswordInput) => {
      try {
        const res = await updatePasswordMutation({ variables: { input } })

        return { res: true, response: !!res.data?.UpdatePassword }
      } catch (error: any) {
        return { res: false, response: error.graphQLErrors[0].debugMessage }
      }
    }
  }
}
