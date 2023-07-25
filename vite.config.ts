import { defineConfig } from 'vite'
import monkey from 'vite-plugin-monkey'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: 'src/main.ts',
      userscript: {
        namespace: 'https://github.com/wChenonly/startup-tampermonkey',
        include: '*://**/*',
        grant: 'unsafeWindow',
        license: 'MIT'
      }
    })
  ]
})
