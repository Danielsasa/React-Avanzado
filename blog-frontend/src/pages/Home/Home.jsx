import { useState, useEffect } from 'react'
import './home.css'

const getRandomImageUrl = (postId) => {
  const imageId = 100 + (postId % 1000) // Obtiene un ID de imagen entre 100 y 1099
  return `https://picsum.photos/id/${imageId}/600/400`
}

const POSTS_PER_PAGE = 8

const Home = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  // Traer los posts de la API
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

  // Datos de paginación
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const indexOfLastPost = currentPage * POSTS_PER_PAGE
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  // Cambiar página
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const nextPage = () => {
    setCurrentPage((prev) => {
      const next = Math.min(prev + 1, totalPages)
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return next
    })
  }

  const prevPage = () => {
    setCurrentPage((prev) => {
      const previous = Math.max(prev - 1, 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return previous
    })
  }

  if (loading) return <div className='loading-state'>Cargando posts...</div>
  if (error) return <div className='error-state'>Error: {error}</div>

  return (
    <div className='home-container'>
      <header className='home-header'>
        <h1 className='home-title'>Blog de Publicaciones</h1>
        <p className='home-subtitle'>Enterate de lo último que acontece en el mundo de la programación</p>
      </header>

      <div className='posts-container'>
        {currentPosts.map(post => (
          <article key={post.id} className='post-card'>
            <div className='post-image-container'>
              <img
                src={getRandomImageUrl(post.id)}
                alt={`Imagen para ${post.title}`}
                className='post-image'
                loading='lazy'
              />
            </div>
            <div className='post-content'>
              <h2 className='post-title'>{post.title}</h2>
              <p className='post-excerpt'>
                {post.body.length > 100
                  ? `${post.body.substring(0, 100)}...`
                  : post.body}
              </p>
              <div className='post-meta'>
                <span>Publicación #{post.id}</span>
                <a href={`/post/${post.id}`} className='read-more'>
                  Leer más
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Paginación */}
      {totalPages > 1 && (
        <div className='pagination'>
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className='pagination-button'
            aria-label='Página anterior'
          >
            &laquo; Anterior
          </button>

          {[...Array(totalPages).keys()].map((number) => (
            <button
              key={number + 1}
              onClick={() => paginate(number + 1)}
              className={`pagination-button ${currentPage === number + 1 ? 'active' : ''}`}
              aria-current={currentPage === number + 1 ? 'page' : undefined}
            >
              {number + 1}
            </button>
          ))}

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className='pagination-button'
            aria-label='Página siguiente'
          >
            Siguiente &raquo;
          </button>
        </div>
      )}
    </div>
  )
}

export default Home
