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

//Params
//Un params sirve para hacer una ruta dinamica, Por ejemp;o si quiero traer la informacion de un post en especifico, puedo hacer que una ruta reciba el id del post y me regrese la informacion de ese post 
// Param:(/api/v1/posts/:postId)
app.get('/api/v1/posts/:postId', (req, res) => {
  // const postId = req.params.postId
  const { postId } = req.params // Desestructuración de objetos
  console.log(`Recibí una petición GET en la ruta /api/v1/posts/${postId}`)
  const post = postsData.find((post) => post.id === parseInt(postId))
  if (post) {
    res.json(post)
  } else {
    res.status(404).json({ error: 'Post not found' })
  }
})

// #4 starting the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
