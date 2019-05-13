const proxy = require('http-proxy-middleware')
const Bundler = require('parcel-bundler')
const express = require('express')

const app = express()
const bundler = new Bundler('src/*.html', { outDir: './bin' })

/**
 * 代理设置
 */
app.use('/api', proxy({ target: 'http://localhost:3000'}))

/**
 * 本地浏览器端口
 */
app.use(bundler.middleware())
const port = Number(process.env.PORT || 7878)
console.log('[linsten]', `http://localhost:${port}`)
app.listen(port)
