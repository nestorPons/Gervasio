import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';


export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      vue() // se utiliza aquí el plugin de Vue
    ],
    // vite config
    define: {
      __APP_ENV__: env.APP_ENV,
    },
  }
})