import fastify from 'fastify'

import data from './plugins/data.js'
import page from './plugins/page.js'
import api from './routes/api.js'

export async function build(opts = {}) {
  const app = fastify(opts)
  
  app.register(data)
  app.register(page)  
  app.register(api, { prefix: '/:lang/api' })

  app.decorate('routeConfig', { lang: '', view: '', params: '', path: '' })
  app.decorate('langs', { default: 'en', allowed: ['en', 'kz', 'ru'] })  
  
  app.setErrorHandler(async (err, request, reply) => {
    request.log.error({ err })
    reply.code(err.statusCode || 500)
    return "I'm sorry, there was an error processing your request."
  })

  return app
}