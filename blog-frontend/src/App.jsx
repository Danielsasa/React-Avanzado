import { BrowserRouter } from 'react-router-dom'
import './App.css'
import BlogRoutes from './routes/BlogRoutes'

function App () {
  return (
    <>
      <BrowserRouter>
        <div className='app'>
          <main className='app-main'>
            <div className='container'>
              <BlogRoutes />
            </div>
          </main>
        </div>
      </BrowserRouter>
      <footer className='app-footer'>
        <div className='container'>
          <p>© 2025 Blog de César Guerra. Todos los derechos reservados.</p>
        </div>
      </footer>

    </>
  )
}

export default App
