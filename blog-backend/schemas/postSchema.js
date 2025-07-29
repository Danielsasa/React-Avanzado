import mongoose from 'mongoose'

// definir el esquema de un post
const postSchema = new mongoose.Schema({
  userId: { type: Number, required: true },
  title: { type: String, required: true, trim: true },
  body: { type: String, required: true },
  imageUrl: { type: String, required: true }
}, { timestamps: true })// creteadt y updateAt automaticos

export default postSchema
