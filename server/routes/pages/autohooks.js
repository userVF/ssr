export default function (app) {  

  app.addHook('onRequest', async function (request, reply) {
    if (!this.langConfig.allowed.includes(request.params.lang)) {
      const segments = request.url.split('/')
      segments.splice(1, 1, this.langConfig.default)
      return reply.redirect(`${segments.join('/')}`)
    }   
  })

  app.addHook('preHandler', async function (request) {
    this.routeConfig = {
      lang: request.params.lang,
      view: request.routeOptions.config.view,    
      params: request.params,
      path: request.url,
    } 
  })

  app.addHook('onSend', async (_request, reply, payload) => {
    reply.type('text/html')  
    return payload
  })
  
}