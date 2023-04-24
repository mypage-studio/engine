import { defineConfig, loadEnv } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'

export default defineConfig(({ mode }): any => {
  const env = loadEnv(mode, process.cwd());
  return {
    server: {
      host: env.VITE_HOST,
      port: env.VITE_PORT,
    },
    preview: {
      host: env.VITE_HOST,
      port: env.VITE_PORT,
    },
    base: './',
    build: {
      outDir: './docs',
      rollupOptions: {
        output: {
          // inlineDynamicImports: false,
          // preserveModules: false,
          // chunkFileNames: (o): string => {
          //   return '[name].js'
          // },
          // manualChunks: {
          //   'svelte': [ 'svelte' ],
          // },
        },
      },
    },
    plugins: [
      svelte({
        preprocess: sveltePreprocess({}),
      }),
    ],
  }
})
