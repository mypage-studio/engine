import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import preprocess from 'svelte-preprocess'
import components from '../src/components/index'

export default defineConfig((): any => {
  const entries: string[] = components.names.map((o) => (`./src/components/${o}/${o}.svelte`))
  return {
    publicDir: false,
    build: {
      lib: {
        entry: [
          './src/libs.ts',
          ...entries,
        ],
        formats: [ 'es' ],
        name: 'MypageEngine',
        fileName: (_, entryName): string => {
          switch (entryName) {
            case 'libs':
              return 'libs.js'
            default:
              return `wc/${entryName}.js`
          }
        },
      },
      outDir: './libs',
      rollupOptions: {
        output: {
          inlineDynamicImports: false,
          preserveModules: false,
          chunkFileNames: (o): string => {
            return '[name].js'
          },
          manualChunks: {
            'svelte': [ 'svelte' ],
          },
          // globals: {
          //   svelte: 'svelte',
          // },
        },
        external: [
          'public/*',
        ],
      },
    },
    plugins: [
      svelte({
        preprocess: preprocess({}),
        include: 'src/components/**/*.svelte',
        compilerOptions: {
          customElement: true,
        },
      })
    ],
  }
})
