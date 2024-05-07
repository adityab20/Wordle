import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import htmlenv from 'vite-plugin-env-html'
import path from 'path'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    resolve: {
      alias: {
        src: path.resolve(__dirname, 'src')
      }
    },
    plugins: [react(), svgr(), htmlenv(env)],
    build: {
      outDir: path.resolve(__dirname, 'dist'),
      chunkSizeWarningLimit: 1024
    },
    base: env.VITE_BASE_URL
  }
})
