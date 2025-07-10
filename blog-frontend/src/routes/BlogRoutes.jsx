import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Contact from '../pages/Contact/Contact'
import NewPost from '../pages/NewPost/NewPost'

const BlogRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/newpost' element={<NewPost />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='*' element={<h1>404 Not Found</h1>} />
    </Routes>
  )
}

export default BlogRoutes
