import { Router } from 'express'
import { getAllPosts, getPostById, createNewPost } from '../controllers/postController.js'

const router = Router()

router.get('/', getAllPosts)
router.get('/:id', getPostById)
router.post('/', createNewPost)

export default router
