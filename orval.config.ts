import { defineConfig } from 'orval'

export default defineConfig({
  apí: {
    input: 'http://localhost:3333/docs/json',
    output: {
      target: './src/http/api.ts',
      client: 'fetch',
      httpClient: 'fetch',
      clean: true,
      baseUrl: 'http://localhost:3333',
      override: {
        fetch: {
          includeHttpResponseReturnType: false,
        },
      },
    },
  },
})
