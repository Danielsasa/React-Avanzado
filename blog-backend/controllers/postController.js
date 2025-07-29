import { getPost, getPosts, createPost, updatePost, deletePost } from '../models/Post.js'

// create
export const createNewPost = async (req, res) => {
  try {
    const postData = {
      title: req.body.title,
      body: req.body.body,
      userId: req.body.userId,
      imageUrl: req.body.imageUrl
    }
    const newPost = await createPost(postData)
    res.status(201).json(newPost)
  } catch (error) {
    res.status(400).json({ message: 'Error creating post', error: error.message })
  }
}
// read
export const getAllPosts = async (req, res) => {
  try {
    const posts = await getPosts()
    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving posts', error: error.message })
  }
}

export const getPostById = async (req, res) => {
  try {
    const posts = await getPost(req.params.id)
    if (!posts) {
      return res.status(404).json({ message: 'Post not found' })
    }
    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving posts', error: error.message })
  }
}
// UPDATE
export const updateOnePost = async (req, res) => {
  try {
    const postDataToUpdate = req.body
    const updatedPost = await updatePost(req.params.id, postDataToUpdate)
    if (!updatedPost) {
      return res.status(404).json({ message: 'Post not found' })
    }
    res.status(200).json(updatedPost)
  } catch (error) {
    res.status(400).json({ message: 'Error updating post', error: error.message })
  }
}
// delete
export const deleteOnePost = async (req, res) => {
  try {
    const sucess = await deletePost(req.params.id)
    if (!sucess) {
      return res.status(404).json({ message: 'Post not found' })
    }
    res.status(204).send() // No content
  } catch (error) {
    res.status(500).json({ message: 'Error deleting post', error: error.message })
  }
}
