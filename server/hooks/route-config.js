export default async function(request) {
  this.routeConfig = {
    lang: request.params.lang,
    view: request.routeOptions.config.view,    
    params: request.params,
    path: request.url,
  }
}