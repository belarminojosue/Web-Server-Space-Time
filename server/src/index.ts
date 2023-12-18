import Fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import fastifyMultipart from '@fastify/multipart'
import { memoriesRoutes } from './routes/memories'
import { uploadRoutes } from './routes/upload'
import { authRoutes } from './routes/auth'
import fastifyStatic from '@fastify/static'
import { resolve } from 'node:path'

const app = Fastify({
  logger: false,
})

app.register(fastifyMultipart)
app.register(fastifyStatic, {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})
app.register(cors, {
  origin: true,
})
app.register(jwt, {
  secret: 'spacetime',
})

app.register(memoriesRoutes)
app.register(authRoutes)
app.register(uploadRoutes)

app.listen({ port: 80 }, function (err, address) {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
  console.log(`Server is now listening on ${address}`)
})
