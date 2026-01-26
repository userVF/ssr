import langRedirect from '../../hooks/lang-redirect.js'
import routeConfig from '../../hooks/route-config.js'

export default function (app) {  

  app.addHook('onRequest', langRedirect)
  app.addHook('preHandler', routeConfig)
  
}