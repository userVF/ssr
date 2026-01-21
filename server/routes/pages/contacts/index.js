import { langSchema } from '../../../utils/schemas.js'

export default async function(app) {

  app.get('/:lang/contacts', {
    schema: langSchema,
    config: { view: 'Contacts' },
  }, async request => {
    const { header, contacts, footer } = app.data.get(
      request.params.lang, [ 'header', 'contacts', 'footer' ]
    )
    return await app.renderPage({
      config: app.routeConfig,
      data: { header, ...contacts, footer }
    })
  })
}