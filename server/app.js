import fastify from 'fastify'
import autoLoad from '@fastify/autoload'
import { join } from 'node:path'

export async function build(opts = {}) {

  const app = fastify(opts)  

  app.register(autoLoad, {
    dir: join(import.meta.dirname, 'plugins'),
  })

  app.register(autoLoad, {
    dir: join(import.meta.dirname, 'routes/api'),
    options: { prefix: '/:lang/api' },
  })

  app.register(autoLoad, {
    dir: join(import.meta.dirname, 'routes/pages'),
    autoHooks: true,
    cascadeHooks: true,
    dirNameRoutePrefix: false,
  })
  
  app.setErrorHandler(async (err, request, reply) => {
    request.log.error({ err })
    reply.code(err.statusCode || 500)
    return "I'm sorry, there was an error processing your request."
  })

  return app
}