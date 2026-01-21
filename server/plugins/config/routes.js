import fp from 'fastify-plugin'

export default fp(async function(app) {
  app.decorate('routeConfig', { lang: '', view: '', params: '', path: '' })
}, { name: 'routeConfig' })