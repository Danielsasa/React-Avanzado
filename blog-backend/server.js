// #1 importing the express module cambio de puert $env:port=4000; node server.js
import express from 'express'
import postsData from './data/posts.json' with { type: 'json'}
// #2acreating an instance of express
const app = express()
const port = process.env.PORT || 3000

// #2b middleware to parse JSON bodies
app.use(express.json())
// #2c configurar express para recibir datos de formularios
app.use(express.urlencoded({ extended: true }))

// #3 defining a simple route
app.get('/', (req, res) => {
  res.send('Saludos G40!')
})

app.get('/api/v1/posts', (req, res) => {
  res.json(postsData)
})

// #4 starting the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
