import { reactive } from 'vue'

export default ({ lang, view, params, path }) => {  

  return reactive({
    lang, 
    view,    
    params,
    path: path.substring(4),
    reset({ view, path, params }) {
      this.view = view
      if(path != undefined) {
        if(!import.meta.env.SSR) {
          history.pushState({}, '', `/${this.lang}${this.trailingSlash(path)}`)
        }
        this.path = path
      } 
      if(params) {
        this.params = params
      }
    },
    trailingSlash(path) {
      return path.length > 0 ? `/${path}` : ''
    },   
  })

}