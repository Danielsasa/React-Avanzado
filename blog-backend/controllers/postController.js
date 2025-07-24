import { getPost, getPosts, createPost } from '../models/Post.js'

// create
export const createNewPost = async (req, res) => {
  try {
    const postData = {
      title: req.body.title,
      body: req.body.body,
      uderId: req.body.userId
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
// update

// delete
