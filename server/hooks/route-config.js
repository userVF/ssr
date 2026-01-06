export default function(request, _reply, done) {
  this.routeConfig ={
    lang: request.params.lang,
    view: request.routeOptions.config.view,    
    params: request.params,
    path: request.url,
  }
  done()
}