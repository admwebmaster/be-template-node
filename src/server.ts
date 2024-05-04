import { fastify } from 'fastify'

const app = fastify()

app.get('/users', () => {
  return { type: 'ciao' }
})

app.get('/videos/:id', () => {
  return { type: 'test funziona' }
})

app.listen({
  host: '0.0.0.0',
  port: process.env.PORT ? Number(process.env.PORT) : 3000,
}).then((port) => {
  console.log('Server Running on port ' + port)
})
