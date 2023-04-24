import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import preprocess from 'svelte-preprocess'
import components from '../src/components/index.js'

export default defineConfig(({}) => {
  const entries = components.names.map((o) => (`./src/components/${o}/index.svelte`))
  return {
    publicDir: false,
    build: {
      lib: {
        entry: entries,
        formats: [ 'esm' ],
        name: 'MypageStudioEngine',
      },
      outDir: './lib/svelte',
      rollupOptions: {
        output: {
          inlineDynamicImports: false,
          preserveModules: false,
          manualChunks: {
            'svelte': [ 'svelte' ],
          },
          entryFileNames: o => {
            const regex = /\/src\/components\/(.*?)\/index.svelte/
            const id = o.facadeModuleId.match(regex)[1]
            return id ? `${id}.js` : '[name].js'
          },
          chunkFileNames: (o) => {
            return '[name].vendor.js'
          },
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
          customElement: false,
        },
      }),
    ],
  }
})
