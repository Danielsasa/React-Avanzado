import { Router } from 'express'
import { getAllPosts, getPostById, createNewPost, updateOnePost, deleteOnePost } from '../controllers/postController.js'

const router = Router()

router.get('/', getAllPosts)
router.get('/:id', getPostById)
router.post('/', createNewPost)
router.patch('/:id', updateOnePost)
router.delete('/:id', deleteOnePost)

export default router
