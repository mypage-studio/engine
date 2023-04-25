import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import preprocess from 'svelte-preprocess'
import components from '../src/components/index.js'

export default defineConfig(({}) => {
  const entries = components.names.map((o) => (`./src/components/${o}/index.wc.svelte`))
  return {
    publicDir: false,
    build: {
      lib: {
        entry: [
          ...entries,
          './src/wc/lib.js',
          './src/wc/define.js',
        ],
        formats: [ 'es' ],
        name: 'MypageStudioEngine',
      },
      outDir: './lib/wc',
      rollupOptions: {
        output: {
          inlineDynamicImports: false,
          preserveModules: false,
          manualChunks: {
            'svelte': [ 'svelte' ],
          },
          entryFileNames: o => {
            const regex = /\/src\/components\/(.*?)\/index.wc.svelte/
            const matched = o.facadeModuleId.match(regex)
            return matched?.length > 0 ? `components/${matched[1]}.js` : '[name].js'
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
        // include: 'src/components/**/*.svelte',
        compilerOptions: {
          customElement: true,
        },
        emitCss: true,
      }),
    ],
  }
})
