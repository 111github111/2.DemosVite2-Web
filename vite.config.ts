import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { prismjsPlugin } from 'vite-plugin-prismjs'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        prismjsPlugin({
            languages: 'all',
            plugins: ['line-numbers', 'copy-to-clipboard'], //官网有其他功能,这里开启行数和复制按钮功能
            theme: 'default', // prism代码高亮主题列表(文章后面含预览效果)
            css: true,
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    base: './',
    define: {
        'process.env': {}
    },
    server: {
        host: '127.0.0.1',
        port: 8080,
        open: false,
        proxy: {
            '/api': {
                'target': 'http://127.0.0.1:7123',
                changeOrigin: true,
                rewrite: path => path,
            },
            '/image': {
                'target': 'http://127.0.0.1:7123',
                changeOrigin: true,
                rewrite: path => path,
            },
            '/video': {
                'target': 'http://127.0.0.1:7123',
                changeOrigin: true,
                rewrite: path => path,
            },
        }
    }
})
