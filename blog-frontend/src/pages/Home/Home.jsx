import { useState, useEffect } from 'react'
import './home.css'

const getRandomImageUrl = (postId) => {
  const imageId = 100 + (postId % 1000) // Obtengo un ID de imagen entre 100 y 1099
  return `https://picsum.photos/id/${imageId}/600/400`
}

const Home = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Traemos los post de la API de jsonplaceholder
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (!response.ok) {
          throw new Error('Error al cargar los posts')
        }
        const data = await response.json()
        setPosts(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  if (loading) return <div className='loading'>Cargando posts...</div>
  if (error) return <div className='error'>Error: {error}</div>

  return (
    <h1>Home</h1>
  )
}
export default Home
