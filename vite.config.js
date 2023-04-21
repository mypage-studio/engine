import { defineConfig, loadEnv } from 'vite'

// docs: https://vitejs.dev/config

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    server: {
      host: env.VITE_HOST,
      port: Number(env.VITE_PORT),
      open: false,
    },
    build: {
      rollupOptions: {},
    },
    preview: {
      host: env.VITE_HOST,
      port: env.VITE_PORT,
    },
    define: {},
    plugins: []
  }
})
