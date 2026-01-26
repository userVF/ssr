import { langSchema } from '../../utils/schemas.js'

export default async function(app) {

  app.get('/', async (_request, reply) => {
    return reply.redirect(`/${app.langConfig.default}`)
  })

  app.get('/:lang', {
    schema: langSchema,
    config: { view: 'Home' },
  }, async (request, reply) => {
    const { header, home, footer } = app.data.get(
      request.params.lang, [ 'header', 'home', 'footer' ]
    )
    const html = await app.getHtml({
      config: app.routeConfig,
      data: { header, ...home, footer }
    })
    return reply.type('text/html').send(html)
  })

  app.get('/:lang/*', {
    schema: langSchema,
    config: { view: 'NotFound' }, 
  }, async (request, reply) => {
    const { header, notFound, footer } = app.data.get(      
      request.params.lang, [ 'header', 'notFound', 'footer' ]
    )
    const html = await app.getHtml({
      config: app.routeConfig,
      data: { header, ...notFound, footer }
    })
    return reply.code(404).type('text/html').send(html)
  })  
}