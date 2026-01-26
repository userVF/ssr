import { langSchema } from '../../../utils/schemas.js'

export default async function(app) {

  app.get('/:lang/contacts', {
    schema: langSchema,
    config: { view: 'Contacts' },
  }, async (request, reply) => {
    const { header, contacts, footer } = app.data.get(
      request.params.lang, [ 'header', 'contacts', 'footer' ]
    )
    const html = await app.getHtml({
      config: app.routeConfig,
      data: { header, ...contacts, footer }
    })
    return reply.type('text/html').send(html)
  })
}