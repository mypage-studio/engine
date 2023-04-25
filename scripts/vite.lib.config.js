import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import preprocess from 'svelte-preprocess'
import { keys as components } from '../src/components/index.js'

export default defineConfig(({}) => {
  const entries = components.map((o) => {
    return `./src/components/${o}/index.js`
  })
  return {
    publicDir: false,
    build: {
      lib: {
        entry: [
          ...entries,
          './src/lib/main.js',
        ],
        formats: [ 'es' ],
        name: 'MypageStudioEngine',
      },
      outDir: './lib',
      rollupOptions: {
        output: {
          inlineDynamicImports: false,
          preserveModules: false,
          manualChunks: {
            'svelte': [ 'svelte' ],
          },
          entryFileNames: o => {
            const regex = /\/src\/components\/(.*?)\/index.js/
            const matched = o.facadeModuleId.match(regex)
            return matched?.length > 0 ? `components/${matched[1]}.js` : '[name].js'
          },
          chunkFileNames: (o) => {
            return 'vendor/[name].js'
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


