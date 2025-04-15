import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()

app.use(cors())
app.use(express.json())

app.get('/posts', async (req, res) => {
  const posts = await prisma.post.findMany()
  res.json(posts)
})

app.post('/posts', async (req, res) => {
  const { title, content } = req.body
  const post = await prisma.post.create({ data: { title, content } })
  res.json(post)
})

app.delete('/posts/:id', async (req, res) => {
  const { id } = req.params
  await prisma.post.delete({ where: { id } })
  res.json({ message: 'Post deleted' })
})

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
})
