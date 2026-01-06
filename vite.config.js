import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ command, mode }) => {

  const env  = loadEnv(mode, process.cwd(), '')

  const config = {    
    base: env.VITE_STATIC_ORIGIN,
    plugins: [ 
      vue(), 
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./client', import.meta.url)),
      },
    },
    build: {
      emptyOutDir: true,
    },
  }

  config['build']['rollupOptions'] = {
    input: {
      index: './html/index.html',
    },
  }

  config['server'] = {}

  if (command === 'serve') {
    config['server']['watch'] = {
      usePolling: true,
      interval: 5000,      
    }
    config['server']['proxy'] = {
      '^/(ru|kz|en)/api/.*': {
        target: env.VITE_APP_ORIGIN,
      },
    }
  }

  return config
  
})

