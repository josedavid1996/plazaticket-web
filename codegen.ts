import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  debug: true,
  verbose: true,
  overwrite: true,
  // schema: 'http://localhost:8080/graphql',
  schema: 'https://api-dev.plazaticket.com/public/graphql',
  documents: 'src/**/*.graphql',
  generates: {
    'src/generated/graphql.tsx': {
      config: { withHooks: true },
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo']
    }
  }
}

export default config
