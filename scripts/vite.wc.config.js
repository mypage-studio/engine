import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import preprocess from 'svelte-preprocess'
import components from '../src/components/index'

export default defineConfig(({}) => {
  const entries = components.names.map((o) => (`./src/components/${o}/${o}.svelte`))
  return {
    publicDir: false,
    build: {
      lib: {
        entry: [
          ...entries,
          './src/lib.js',
          './src/wc.js',
        ],
        formats: [ 'es' ],
        name: 'MypageStudioEngine',
        fileName: (_, entryName, c) => {
          switch (entryName) {
            case 'lib':
              return 'main.js'
            case 'wc':
              return 'wc.js'
            default:
              return `wc/${entryName}.js`
          }
        },
      },
      outDir: './lib',
      rollupOptions: {
        output: {
          inlineDynamicImports: false,
          preserveModules: false,
          chunkFileNames: (o) => {
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
      }),
    ],
  }
})
