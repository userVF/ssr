export default function(app, _opts, done) {

  app.get('/home', (request, _reply) => {
    const { home } = app.data.get(
      request.params.lang, [ 'home' ]
    )
    return home
  })

  app.get('/about', (request, _reply) => {
    const { about } = app.data.get(
      request.params.lang, [ 'about' ]
    )
    return about
  })

  app.get('/contacts', (request, _reply) => {
    const { contacts } = app.data.get(
      request.params.lang, [ 'contacts' ]
    )
    return contacts
  })

  done()

}