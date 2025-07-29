import mongoose from 'mongoose'
import postSchema from '../schemas/postSchema.js'

// Creo el modelo apartir del esquema
const Post = mongoose.model('Post', postSchema)

// create
export const createPost = async (postData) => {
  const newPost = new Post({
    userId: postData.userId,
    title: postData.title,
    body: postData.body,
    imageUrl: postData.imageUrl,
    ...postData
  })
  return await newPost.save()
}

// read
export const getPosts = async () => {
  return await Post.find().sort({ createdAt: -1 }) // Ordenar por fecha de creación descendente
}

export const getPost = async (id) => {
  return await Post.findById(id)
}
// update
export const updatePost = async (id, postDataToUpdate) => {
  const updatedPost = await Post.findByIdAndUpdate(
    id,
    { $set: postDataToUpdate }, // $set-> Actualiza solo los campos especificados
    { new: true, runValidators: true } // Devuelve el documento actualizado y valida los cambios
  )
  return updatedPost
}

// delete
export const deletePost = async (id) => {
  const result = await Post.findByIdAndDelete(id)
  return result !== null // Devuelve true si se eliminó, false si no se encontró
}
