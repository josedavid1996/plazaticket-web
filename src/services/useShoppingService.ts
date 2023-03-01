import { ShoppingCartInput, useCreateShoppingCartMutation } from '@generated/graphql'

export const useShoppingService = () => {
  const [createShoppingCartMutation] = useCreateShoppingCartMutation()

  return {
    createShoppingCart: async (input: ShoppingCartInput) => {
      try {
        const res = await createShoppingCartMutation({ variables: { input } })

        return { res: true, response: !!res.data?.CreateShoppingCart }
      } catch (error: any) {
        return { res: false, response: error.graphQLErrors[0].debugMessage }
      }
    }
  }
}
