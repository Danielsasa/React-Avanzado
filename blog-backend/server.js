// #1 Importar express
import express, { json, urlencoded } from 'express'
import postsData from './data/posts.json' with { type: "json" }
import cors from 'cors'

// ...el resto de tu código igual...

// #2a Crear una instancia de express (app)
const app = express()
const port = process.env.PORT || 3000

// #2b Configurar express para que entienda JSON
app.use(json())

// #2c Configurar express para recibir datos de formularios
app.use(urlencoded({ extended: true }))

// #2d Configurar CORS para permitir peticiones desde el frontend
app.use(cors())

// #3 Definir las rutas
app.get('/', (req, res) => {
  res.json({
    message: 'API del Blog Backend',
    endpoints: {
      getPosts: 'GET /api/v1/posts',
      getPost: 'GET /api/v1/posts/:id',
      createPost: 'POST /api/v1/posts',
      updatePost: 'PATCH /api/v1/posts/:id',
      deletePost: 'DELETE /api/v1/posts/:id'
    }
  })
})
// #4 starting the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
