import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'

export default {
    plugins: [
        vue(), 
        ssr({ 
            prerender: {noExtraDir: true}
        })
    ],
    resolve: {
        alias: {
         "#root": __dirname,
        }
    }
}

