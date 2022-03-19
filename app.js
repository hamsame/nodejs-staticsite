const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('./public'))
app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, './public/index.html'))
})

app.get('*', (req, res) => {
  res.status(404).sendFile(path.resolve(__dirname, './public/404.html'))
})

app.listen(5000)
