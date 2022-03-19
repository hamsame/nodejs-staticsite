const express = require('express')
const path = require('path')

const app = express()

app.use(express('./public'))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/index.html'))
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/404.html'))
})

app.listen(5000)
