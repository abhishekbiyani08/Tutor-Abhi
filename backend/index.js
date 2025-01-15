const express = require('express')
const app = express()
const port = 2471

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/pos', (req, res) => {
    res.send('Its a POST request')
})

app.put('/abhishek', (req, res) => {
    res.send('Put request');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})