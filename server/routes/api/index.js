import { langSchema } from '../../utils/schemas.js'

export default async function(app) {

  app.get('/home', { schema: langSchema }, request => {
    const { home } = app.data.get(
      request.params.lang, [ 'home' ]
    )
    return home
  })

  app.get('/about', { schema: langSchema }, request => {
    const { about } = app.data.get(
      request.params.lang, [ 'about' ]
    )
    return about
  })

  app.get('/contacts', { schema: langSchema }, request => {
    const { contacts } = app.data.get(
      request.params.lang, [ 'contacts' ]
    )
    return contacts
  })

  app.get('/*', async (_request, reply) => {
    return reply.code(404).send()
  })

}