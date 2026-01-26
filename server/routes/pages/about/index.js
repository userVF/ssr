import { langSchema } from '../../../utils/schemas.js'

export default async function(app) {

  app.get('/:lang/about', { 
    schema: langSchema,
    config: { view: 'About' },
  }, async (request, reply) => {
    const { header, about, footer } = app.data.get(
      request.params.lang, [ 'header', 'about', 'footer' ]
    )
    const html = await app.getHtml({
      config: app.routeConfig,
      data: { header, ...about, footer }
    })
    return reply.type('text/html').send(html)
  })
}