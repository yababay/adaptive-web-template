import { resolve } from 'path'
import { defineConfig } from 'vite'
import { readFileSync } from 'fs'
import pugPlugin from "vite-plugin-pug"
import showdown from 'showdown'

const mdConverter = new showdown.Converter()

const pugOptions = {
  filters: {
    markdown: (text, opts) => {
      if(opts && opts.from){
        const prefix = /^(.*)\/[^\/]+$/.exec(opts.filename)[1]
        text = readFileSync(`${prefix}/${opts.from}`, 'utf8')
      }
      return mdConverter.makeHtml(text)
    }
  }
}

const pugLocals = {
  author: "Михаил Беляков",
  title: "Домашняя страница",
  motto: "Привет, мир",
  year: 2023
}

export default defineConfig({
  plugins: [pugPlugin(pugOptions, pugLocals)],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname,  'index.html'),
        error: resolve(__dirname, 'icons.html'),
        eula: resolve(__dirname, 'eula.html'),
      },
    },
  },
})
