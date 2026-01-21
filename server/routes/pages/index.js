import { langSchema } from '../../utils/schemas.js'

export default async function(app) {

  app.get('/', async (_request, reply) => {
    return reply.redirect(`/${app.langConfig.default}`)
  })

  app.get('/:lang', {
    schema: langSchema,
    config: { view: 'Home' },
  }, async (request, _reply) => {
    const { header, home, footer } = app.data.get(
      request.params.lang, [ 'header', 'home', 'footer' ]
    )
    return await app.renderPage({
      config: app.routeConfig,
      data: { header, ...home, footer },
    })
  })

  app.get('/:lang/*', {
    schema: langSchema,
    config: { view: 'NotFound' }, 
  }, async (request, reply) => {
    const { header, notFound, footer } = app.data.get(      
      request.params.lang, [ 'header', 'notFound', 'footer' ]
    )
    reply.code(404)
    return await app.renderPage({
      config: app.routeConfig,
      data: { header, ...notFound, footer }
    })
  })  
}