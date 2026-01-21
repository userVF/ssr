import { langSchema } from '../../../utils/schemas.js'

export default async function(app) {

  app.get('/:lang/about', { 
    schema: langSchema,
    config: { view: 'About' },
  }, async request => {
    const { header, about, footer } = app.data.get(
      request.params.lang, [ 'header', 'about', 'footer' ]
    )
    return await app.renderPage({
      config: app.routeConfig,
      data: { header, ...about, footer }
    })
  })
}