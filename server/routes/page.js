import langRedirect from '../hooks/lang-redirect.js'
import routeConfig from '../hooks/route-config.js'
import htmlReply from '../hooks/html-reply.js'

export default function(app, _opts, done) {

  app.addHook('onRequest', langRedirect)
  app.addHook('preHandler', routeConfig)
  app.addHook('onSend', htmlReply)

  app.get('/', { config: { view: 'Home' } }, async (request, _reply) => {
    const { header, home, footer } = app.data.get(
      request.params.lang, [ 'header', 'home', 'footer' ]
    )
    return await app.renderPage({
      config: app.routeConfig,
      data: { header, ...home, footer },
    })
  })

  app.get('/about', { config: { view: 'About' } }, async (request, _reply) => {
    const { header, about, footer } = app.data.get(
      request.params.lang, [ 'header', 'about', 'footer' ]
    )
    return await app.renderPage({
      config: app.routeConfig,
      data: { header, ...about, footer }
    })  
  })

  app.get('/contacts', { config: { view: 'Contacts' } }, async (request, _reply) => {
    const { header, contacts, footer } = app.data.get(
      request.params.lang, [ 'header', 'contacts', 'footer' ]
    )
    return await app.renderPage({
      config: app.routeConfig,
      data: { header, ...contacts, footer }
    })  
  })

  app.get('/*', { config: { view: 'NotFound' } }, async (request, reply) => {
    reply.code(404)
    if (request.url.includes('api')) {
      return reply.send()
    }
    const { header, notFound, footer } = app.data.get(
      request.params.lang, [ 'header', 'notFound', 'footer' ]
    )
    return await app.renderPage({
      config: app.routeConfig,
      data: { header, ...notFound, footer }
    })
  })

  done()
}